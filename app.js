const chainInput = document.getElementById("chainInput");
const drinkInput = document.getElementById("drinkInput");
const searchBtn = document.getElementById("searchBtn");
const errorMessage = document.getElementById("errorMessage");
const resultsDiv = document.getElementById("results");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");
const randomBtn = document.getElementById("randomBtn");


randomBtn.addEventListener("click", randomDrink);

function getSelectedTags() {
  return [...document.querySelectorAll("#tagFilters input:checked")]
    .map(box => box.value);
}

function filterRecommendations(matches) {
  const selectedTags = getSelectedTags();

  // If no filters are selected, show everything
  if (selectedTags.length === 0) {
    return matches;
  }

  // Keep drinks that contain ALL selected tags
  return matches.filter(drink =>
    selectedTags.every(tag => drink.tags.includes(tag))
  );
}

searchBtn.addEventListener("click", recommendations);

function recommendations() {
  const userChain = chainInput.value.trim();
  const userDrink = drinkInput.value.trim();

  if (!userChain || !userDrink) {
    errorMessage.textContent = "Enter chain and drink.";
    return;
  }

  const matchedChain = getClosestChain(userChain);

  if (!matchedChain) {
    errorMessage.textContent =
      "Chain not included in database.";
    return;
  }

  const matchedDrink =
    getClosestDrink(matchedChain, userDrink);

  if (!matchedDrink) {
    errorMessage.textContent =
      "Boba not included in database.";
    return;
  }

  errorMessage.textContent = "";

  let matches =
  similarityMatch(matchedChain, matchedDrink);

  matches = filterRecommendations(matches);

  renderResults(matches);
}

function getClosestChain(input) {
  const names = Object.keys(chains);

  let bestMatch = null;
  let bestScore = 0;

  names.forEach(name => {
    const score = similarity(
      input.toLowerCase(),
      name.toLowerCase()
    );

    if (score > bestScore) {
      bestScore = score;
      bestMatch = name;
    }
  });

  return bestScore > 0.4 ? bestMatch : null;
}

function getClosestDrink(chain, input) {
  const drinks = [];

  Object.values(chains[chain]).forEach(series => {
    series.forEach(drink => drinks.push(drink.name));
  });

  let bestMatch = null;
  let bestScore = 0;

  drinks.forEach(drink => {
    const score = similarity(
      input.toLowerCase(),
      drink.toLowerCase()
    );

    if (score > bestScore) {
      bestScore = score;
      bestMatch = drink;
    }
  });

  return bestScore > 0.4 ? bestMatch : null;
}

function similarity(a, b) {
  const longer =
    a.length > b.length ? a : b;

  const shorter =
    a.length > b.length ? b : a;

  const distance =
    levenshtein(longer, shorter);

  return (
    longer.length - distance
  ) / longer.length;
}

function levenshtein(a, b) {
  const matrix = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        matrix[i][j] =
          matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

function similarityMatch(
  inputChain,
  inputDrink,
  topSimilar = 10
) {
  let tags = null;

  for (const drinks of Object.values(chains[inputChain])) {
    for (const drink of drinks) {
      if (drink.name === inputDrink) {
        tags = new Set(drink.tags);
      }
    }
  }

  if (!tags) return [];

  const recommendations = [];

  for (const [chainName, series] of Object.entries(chains)) {
    for (const [seriesName, drinks] of Object.entries(series)) {
      drinks.forEach(drink => {

        if (drink.name === inputDrink)
          return;

        const drinkTags =
          new Set(drink.tags);

        const intersection =
          [...tags].filter(tag =>
            drinkTags.has(tag)
          );

        const union =
          new Set([
            ...tags,
            ...drinkTags
          ]);

        const similarity =
          Math.floor(
            (intersection.length /
              union.size) * 100
          );

        if (similarity > 0) {
          recommendations.push({
            name: drink.name,
            chain: chainName,
            series: seriesName,
            similarity,
            tags: drink.tags
          });
        }
      });
    }
  }

  recommendations.sort(
    (a, b) => b.similarity - a.similarity
  );

  return recommendations.slice(0, topSimilar);
}

clearFiltersBtn.addEventListener("click", clearFilters);

function clearFilters() {

  document
    .querySelectorAll("#tagFilters input")
    .forEach(box => box.checked = false);

}

function randomDrink() {

  const userChain = chainInput.value.trim();

  if (!userChain) {
    errorMessage.textContent = "Enter a boba bar.";
    return;
  }

  const matchedChain = getClosestChain(userChain);

  if (!matchedChain) {
    errorMessage.textContent = "Chain not found.";
    return;
  }

  errorMessage.textContent = "";

  const drinks = [];

  for (const [seriesName, series] of Object.entries(chains[matchedChain])) {

    series.forEach(drink => {

      drinks.push({
        ...drink,
        series: seriesName
      });

    });

  }

  const selectedTags = getSelectedTags();

  let filtered = drinks;

  if (selectedTags.length) {

    filtered = drinks.filter(drink =>
      selectedTags.every(tag =>
        drink.tags.includes(tag)
      )
    );

  }

  if (!filtered.length) {

    errorMessage.textContent =
      "No drinks match those filters.";

    return;

  }

  const random =
    filtered[Math.floor(Math.random() * filtered.length)];

    resultsDiv.innerHTML = `
    <h2 class="results-title">Random Drink Selection . . .</h2>

    <table class="random-table">
      <thead>
        <tr>
          <th>Drink</th>
          <th>Chain</th>
          <th>Series</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>${random.name}</td>
          <td>${matchedChain}</td>
          <td>${random.series}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function renderResults(matches) {
  resultsDiv.innerHTML = "";

  if (!matches.length) {
    errorMessage.textContent =
      "No matches found.";
    return;
  }

  const title = document.createElement("h2");
  title.className = "results-title";
  title.textContent = "Your Personalized, Curated Menu:";

  const table = document.createElement("table");

  table.innerHTML = `
    <thead>
      <tr>
        <th>Drink</th>
        <th>Chain</th>
        <th>Series</th>
        <th>%</th>
      </tr>
    </thead>
    <tbody>
      ${matches.map(m => `
        <tr>
          <td>${m.name}</td>
          <td>${m.chain}</td>
          <td>${m.series}</td>
          <td>${m.similarity}%</td>
        </tr>
      `).join("")}
    </tbody>
  `;

  resultsDiv.appendChild(title);
  resultsDiv.appendChild(table);
}
