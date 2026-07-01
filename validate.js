// Validates bobaData against the fixed 50-tag vocabulary + structure.
const bobaData = require("./chains");

const VOCAB = new Set([
  // Base/category
  "milk-tea","fruit-tea","pure-tea","smoothie-slush","coffee","brown-sugar-series",
  // Tea variety
  "green-tea","black-tea","oolong","matcha","jasmine","herbal-floral",
  // Flavor
  "sweet","savory-sweet","fruity","floral","nutty","chocolatey","caramel","taro","vanilla","coconut","citrusy","berry","tropical","honeyed",
  // Tone/character
  "earthy","smoky","roasted-toasty","malty","vegetal-grassy","warm-spiced","bittersweet","tart","bold","delicate",
  // Texture/mouthfeel
  "creamy","velvety-foam","salty-milk-foam","icy","light-refreshing","chewy-pearls","silky-smooth","frothy","juicy",
  // Body/signal
  "balanced","rich-indulgent","best-selling","signature","dessert-like",
]);

let chains = 0, series = 0, drinks = 0;
const invalid = [];
const oddCount = [];
const tagUse = {};

for (const [chain, seriesMap] of Object.entries(bobaData)) {
  chains++;
  for (const [seriesName, items] of Object.entries(seriesMap)) {
    series++;
    for (const drink of items) {
      drinks++;
      if (!Array.isArray(drink.tags)) { invalid.push(`${chain} / ${drink.name}: tags not array`); continue; }
      if (drink.tags.length < 8 || drink.tags.length > 12) oddCount.push(`${chain} / ${drink.name}: ${drink.tags.length} tags`);
      const seen = new Set();
      for (const t of drink.tags) {
        tagUse[t] = (tagUse[t] || 0) + 1;
        if (!VOCAB.has(t)) invalid.push(`${chain} / ${seriesName} / ${drink.name}: INVALID tag "${t}"`);
        if (seen.has(t)) invalid.push(`${chain} / ${drink.name}: DUPLICATE tag "${t}"`);
        seen.add(t);
      }
    }
  }
}

console.log(`Chains: ${chains}  Series: ${series}  Drinks: ${drinks}`);
console.log(`Vocabulary size: ${VOCAB.size}`);
const unused = [...VOCAB].filter(t => !tagUse[t]);
console.log(`Unused vocab tags (${unused.length}): ${unused.join(", ") || "(none)"}`);
console.log(`Tag-count outliers (<8 or >12): ${oddCount.length}`);
oddCount.forEach(s => console.log("  - " + s));
console.log(`\nINVALID/DUPLICATE entries: ${invalid.length}`);
invalid.forEach(s => console.log("  ✗ " + s));
console.log(invalid.length === 0 ? "\n✅ ALL TAGS VALID" : "\n❌ FIX REQUIRED");

function getSelectedTags() {
    return [...document.querySelectorAll("#tagFilters input:checked")]
        .map(box => box.value);
}
