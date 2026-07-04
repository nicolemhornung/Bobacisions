const chains = {
    "Gong Cha": {
      "Milk Foam Series": [
        { "name": "Milk Foam Wintermelon", "tags": ["signature","best-selling","pure-tea","salty-milk-foam","velvety-foam","caramel","honeyed","balanced","delicate","light-refreshing"] },
        { "name": "Milk Foam Green Tea", "tags": ["best-selling","pure-tea","green-tea","salty-milk-foam","velvety-foam","vegetal-grassy","bittersweet","balanced","creamy","light-refreshing"] },
        { "name": "Milk Foam Black Tea", "tags": ["pure-tea","black-tea","salty-milk-foam","velvety-foam","malty","bold","balanced","creamy","savory-sweet","roasted-toasty"] },
        { "name": "Milk Foam Oolong Tea", "tags": ["pure-tea","oolong","salty-milk-foam","velvety-foam","roasted-toasty","earthy","delicate","balanced","creamy","light-refreshing"] }
      ],
      "Milk Tea Series": [
        { "name": "Pearl Milk Tea", "tags": ["signature","best-selling","milk-tea","black-tea","chewy-pearls","creamy","balanced","sweet","malty","silky-smooth"] },
        { "name": "Brown Sugar Milk Tea", "tags": ["best-selling","brown-sugar-series","milk-tea","caramel","honeyed","rich-indulgent","dessert-like","chewy-pearls","creamy","sweet"] },
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","nutty","sweet","creamy","silky-smooth","earthy","dessert-like","chewy-pearls","balanced"] },
        { "name": "Winter Melon Milk Tea", "tags": ["milk-tea","caramel","honeyed","delicate","balanced","creamy","silky-smooth","light-refreshing","sweet","velvety-foam"] }
      ],
      "Fruit Tea Series": [
        { "name": "QQ Passion Fruit Green Tea", "tags": ["signature","best-selling","fruit-tea","green-tea","tropical","fruity","tart","juicy","chewy-pearls","light-refreshing"] },
        { "name": "Mango Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","sweet","juicy","light-refreshing","balanced","icy","honeyed"] },
        { "name": "Grapefruit Green Tea with Aloe Vera", "tags": ["fruit-tea","green-tea","citrusy","tart","bittersweet","light-refreshing","juicy","delicate","balanced","vegetal-grassy"] },
        { "name": "Wintermelon Tea", "tags": ["fruit-tea","pure-tea","caramel","honeyed","delicate","balanced","light-refreshing","sweet","earthy","silky-smooth"] }
      ],
      "Freshly Brewed Series": [
        { "name": "Oolong Tea", "tags": ["pure-tea","oolong","roasted-toasty","earthy","smoky","delicate","balanced","light-refreshing","bold","silky-smooth"] },
        { "name": "Earl Grey Tea", "tags": ["pure-tea","black-tea","floral","citrusy","herbal-floral","delicate","balanced","light-refreshing","bold","malty"] }
      ],
      "Smoothie Series": [
        { "name": "Mango Smoothie", "tags": ["best-selling","smoothie-slush","tropical","fruity","sweet","icy","juicy","light-refreshing","dessert-like","balanced"] },
        { "name": "Taro Milk Slush", "tags": ["smoothie-slush","taro","nutty","sweet","creamy","icy","dessert-like","silky-smooth","rich-indulgent","balanced"] }
      ],
      "Latte & More": [
        { "name": "Matcha Tea Latte", "tags": ["milk-tea","matcha","green-tea","vegetal-grassy","earthy","creamy","silky-smooth","balanced","sweet","velvety-foam"] },
        { "name": "Sea Salt Coffee", "tags": ["coffee","savory-sweet","salty-milk-foam","velvety-foam","bold","roasted-toasty","bittersweet","balanced","creamy","frothy"] },
        { "name": "Caramel Coffee Milk Tea", "tags": ["coffee","milk-tea","caramel","sweet","rich-indulgent","creamy","silky-smooth","dessert-like","bold","malty"] }
      ]
    },
    "Kung Fu Tea": {
      "Classic Series": [
        { "name": "Kung Fu Green Tea", "tags": ["best-selling","pure-tea","green-tea","vegetal-grassy","delicate","light-refreshing","balanced","earthy","tart","silky-smooth"] },
        { "name": "Longan Jujube Tea", "tags": ["best-selling","signature","pure-tea","fruity","honeyed","caramel","tart","earthy","herbal-floral","balanced"] },
        { "name": "Kung Fu Honey Tea", "tags": ["pure-tea","black-tea","honeyed","floral","delicate","light-refreshing","balanced","sweet","malty","silky-smooth"] }
      ],
      "Milk Tea Series": [
        { "name": "Kung Fu Milk Tea", "tags": ["signature","best-selling","milk-tea","jasmine","black-tea","creamy","balanced","silky-smooth","sweet","chewy-pearls"] },
        { "name": "Thai Milk Tea", "tags": ["milk-tea","black-tea","warm-spiced","sweet","caramel","bold","creamy","rich-indulgent","best-selling","chewy-pearls"] },
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","nutty","vanilla","sweet","creamy","silky-smooth","dessert-like","rich-indulgent","chewy-pearls"] },
        { "name": "Honey Oolong Milk Tea", "tags": ["milk-tea","oolong","honeyed","roasted-toasty","balanced","creamy","silky-smooth","delicate","sweet","earthy"] },
        { "name": "Coconut Milk Tea", "tags": ["best-selling","milk-tea","black-tea","coconut","citrusy","floral","creamy","sweet","balanced","silky-smooth"] }
      ],
      "Milk Strike Series": [
        { "name": "Oreo WOW", "tags": ["signature","best-selling","milk-tea","brown-sugar-series","chocolatey","sweet","creamy","dessert-like","rich-indulgent","chewy-pearls"] },
        { "name": "Cocoa Cream WOW", "tags": ["best-selling","milk-tea","brown-sugar-series","chocolatey","sweet","rich-indulgent","creamy","dessert-like","silky-smooth","chewy-pearls"] },
        { "name": "Red Bean WOW", "tags": ["best-selling","milk-tea","brown-sugar-series","nutty","sweet","creamy","chewy-pearls","savory-sweet","balanced","silky-smooth"] },
        { "name": "Herbal Jelly WOW", "tags": ["best-selling","milk-tea","brown-sugar-series","herbal-floral","earthy","bittersweet","sweet","creamy","chewy-pearls","balanced"] }
      ],
      "Milk Cap Series": [
        { "name": "Winter Melon Tea Cap", "tags": ["best-selling","signature","pure-tea","salty-milk-foam","velvety-foam","caramel","honeyed","balanced","creamy","delicate"] },
        { "name": "Honey Tea Cap", "tags": ["best-selling","pure-tea","black-tea","salty-milk-foam","velvety-foam","honeyed","balanced","light-refreshing","savory-sweet","delicate"] },
        { "name": "Matcha Milk Cap", "tags": ["matcha","green-tea","salty-milk-foam","velvety-foam","vegetal-grassy","earthy","creamy","balanced","sweet","bittersweet"] }
      ],
      "Punch Series": [
        { "name": "Mango Green Tea", "tags": ["best-selling","fruit-tea","green-tea","tropical","fruity","sweet","juicy","light-refreshing","delicate","balanced"] },
        { "name": "Grapefruit Green Tea", "tags": ["best-selling","fruit-tea","green-tea","citrusy","tart","bittersweet","light-refreshing","juicy","balanced","delicate"] },
        { "name": "Rosehip Lemonade", "tags": ["best-selling","fruit-tea","floral","citrusy","tart","light-refreshing","juicy","herbal-floral","sweet","delicate"] },
        { "name": "Peach Oolong Tea", "tags": ["fruit-tea","oolong","fruity","sweet","roasted-toasty","light-refreshing","juicy","balanced","delicate","honeyed"] }
      ],
      "Slush Series": [
        { "name": "Oreo Slush", "tags": ["best-selling","smoothie-slush","chocolatey","sweet","creamy","icy","dessert-like","rich-indulgent","silky-smooth","balanced"] },
        { "name": "Taro Slush", "tags": ["best-selling","smoothie-slush","taro","nutty","sweet","creamy","icy","dessert-like","silky-smooth","rich-indulgent"] }
      ],
      "Yogurt Series": [
        { "name": "Yogurt Green Tea", "tags": ["fruit-tea","green-tea","tart","savory-sweet","light-refreshing","balanced","juicy","vegetal-grassy","delicate","silky-smooth"] }
      ],
      "Espresso Series": [
        { "name": "Caramel Macchiato", "tags": ["coffee","caramel","sweet","rich-indulgent","creamy","dessert-like","bold","silky-smooth","roasted-toasty","balanced"] }
      ]
    },
    "CoCo Fresh Tea & Juice": {
      "Milk Tea": [
        { "name": "Bubble Tea", "tags": ["signature","best-selling","milk-tea","black-tea","chewy-pearls","creamy","sweet","balanced","silky-smooth","malty"] },
        { "name": "Classic Lava Pearls", "tags": ["best-selling","brown-sugar-series","milk-tea","caramel","honeyed","rich-indulgent","dessert-like","chewy-pearls","creamy","sweet"] },
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","nutty","sweet","creamy","silky-smooth","earthy","dessert-like","balanced","rich-indulgent"] },
        { "name": "3 Guys Milk Tea", "tags": ["signature","best-selling","milk-tea","black-tea","chewy-pearls","creamy","sweet","rich-indulgent","dessert-like","balanced"] },
        { "name": "QQ Milk Tea", "tags": ["signature","best-selling","milk-tea","taro","earthy","nutty","sweet","chewy-pearls","creamy","balanced"] },
        { "name": "Jasmine Milk Tea", "tags": ["milk-tea","jasmine","green-tea","floral","delicate","creamy","light-refreshing","balanced","sweet","silky-smooth"] }
      ],
      "Fruit Tea": [
        { "name": "Bubble Gaga", "tags": ["best-selling","fruit-tea","green-tea","tropical","coconut","fruity","tart","juicy","chewy-pearls","light-refreshing"] },
        { "name": "Mango Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","sweet","juicy","light-refreshing","delicate","balanced","honeyed"] },
        { "name": "Lemon Black Tea", "tags": ["fruit-tea","black-tea","citrusy","tart","light-refreshing","juicy","balanced","delicate","bold","sweet"] },
        { "name": "Lemon Winter Melon Tea", "tags": ["fruit-tea","caramel","honeyed","citrusy","tart","delicate","light-refreshing","balanced","sweet","earthy"] }
      ],
      "Fruit Chunks": [
        { "name": "Chunky Mango Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","juicy","sweet","light-refreshing","balanced","delicate","icy"] },
        { "name": "Berry Lovers", "tags": ["milk-tea","black-tea","berry","fruity","tart","creamy","sweet","dessert-like","rich-indulgent","velvety-foam"] }
      ],
      "Slush/Smoothie": [
        { "name": "Mango Smoothie", "tags": ["best-selling","smoothie-slush","tropical","fruity","sweet","icy","juicy","light-refreshing","silky-smooth","balanced"] },
        { "name": "Matcha Smoothie", "tags": ["smoothie-slush","matcha","green-tea","vegetal-grassy","earthy","salty-milk-foam","creamy","icy","balanced","bittersweet"] }
      ],
      "Cream Cloud": [
        { "name": "Cloud Black Tea", "tags": ["pure-tea","black-tea","salty-milk-foam","velvety-foam","savory-sweet","bold","malty","balanced","creamy","roasted-toasty"] },
        { "name": "Cloud Green Tea", "tags": ["pure-tea","green-tea","salty-milk-foam","velvety-foam","savory-sweet","vegetal-grassy","balanced","creamy","light-refreshing","delicate"] }
      ],
      "Fresh Milk": [
        { "name": "Lava Pearl Latte", "tags": ["best-selling","brown-sugar-series","milk-tea","caramel","honeyed","rich-indulgent","dessert-like","chewy-pearls","creamy","silky-smooth"] },
        { "name": "Matcha Latte", "tags": ["milk-tea","matcha","green-tea","vegetal-grassy","earthy","creamy","silky-smooth","balanced","sweet","delicate"] }
      ],
      "Cold Brew Coffee": [
        { "name": "Cold Brew with Cream Cloud & Brown Sugar Lava Pearls", "tags": ["coffee","brown-sugar-series","caramel","smoky","roasted-toasty","salty-milk-foam","rich-indulgent","chewy-pearls","creamy","bold"] }
      ],
      "Probiotics": [
        { "name": "Peach Yogurt", "tags": ["best-selling","fruit-tea","fruity","tart","savory-sweet","juicy","light-refreshing","sweet","balanced","silky-smooth"] },
        { "name": "Mango Yakult", "tags": ["fruit-tea","tropical","fruity","tart","savory-sweet","sweet","juicy","light-refreshing","balanced","icy"] }
      ]
    },
    "Sharetea": {
      "Brewed Tea": [
        { "name": "Honey Tea", "tags": ["pure-tea","black-tea","honeyed","floral","delicate","light-refreshing","balanced","sweet","silky-smooth","malty"] },
        { "name": "Classic Oolong Tea", "tags": ["pure-tea","oolong","roasted-toasty","earthy","smoky","delicate","balanced","bold","light-refreshing","silky-smooth"] }
      ],
      "Milk Tea": [
        { "name": "Classic Pearl Milk Tea", "tags": ["signature","best-selling","milk-tea","black-tea","chewy-pearls","creamy","balanced","bittersweet","sweet","silky-smooth"] },
        { "name": "Taro Pearl Milk Tea", "tags": ["best-selling","milk-tea","taro","nutty","vanilla","sweet","creamy","silky-smooth","dessert-like","chewy-pearls"] },
        { "name": "Thai Pearl Milk Tea", "tags": ["milk-tea","black-tea","warm-spiced","caramel","sweet","bold","creamy","rich-indulgent","chewy-pearls","silky-smooth"] },
        { "name": "QQ Happy Family", "tags": ["signature","best-selling","milk-tea","black-tea","chewy-pearls","creamy","sweet","rich-indulgent","dessert-like","balanced"] },
        { "name": "Coffee Milk Tea with Coffee Jelly", "tags": ["milk-tea","coffee","chocolatey","sweet","creamy","rich-indulgent","dessert-like","bold","silky-smooth","balanced"] }
      ],
      "Fruit Tea": [
        { "name": "Hawaii Fruit Tea with Aiyu Jelly", "tags": ["signature","fruit-tea","tropical","fruity","citrusy","tart","sweet","juicy","light-refreshing","balanced"] },
        { "name": "Mango Green Tea", "tags": ["best-selling","fruit-tea","green-tea","tropical","fruity","sweet","tart","juicy","light-refreshing","delicate"] },
        { "name": "Kiwi Fruit Tea with Aiyu Jelly", "tags": ["fruit-tea","green-tea","citrusy","tart","fruity","juicy","light-refreshing","sweet","balanced","delicate"] },
        { "name": "Peach Tea with Honey Jelly", "tags": ["fruit-tea","black-tea","fruity","honeyed","sweet","juicy","light-refreshing","delicate","balanced","chewy-pearls"] }
      ],
      "Fresh Milk": [
        { "name": "Matcha with Fresh Milk", "tags": ["best-selling","milk-tea","matcha","green-tea","vegetal-grassy","earthy","creamy","silky-smooth","sweet","balanced"] },
        { "name": "Handmade Taro with Fresh Milk", "tags": ["milk-tea","taro","nutty","sweet","creamy","silky-smooth","earthy","rich-indulgent","dessert-like","balanced"] },
        { "name": "Wintermelon with Fresh Milk", "tags": ["signature","best-selling","milk-tea","caramel","vanilla","honeyed","creamy","silky-smooth","balanced","sweet"] }
      ],
      "Ice Blended": [
        { "name": "Taro Ice Blended with Pudding", "tags": ["smoothie-slush","taro","nutty","sweet","creamy","icy","dessert-like","rich-indulgent","silky-smooth","balanced"] },
        { "name": "Thai Tea Ice Blended with Pearl", "tags": ["best-selling","smoothie-slush","black-tea","warm-spiced","caramel","sweet","creamy","icy","chewy-pearls","rich-indulgent"] },
        { "name": "Strawberry Ice Blended with Lychee Jelly & Ice Cream", "tags": ["smoothie-slush","berry","fruity","sweet","creamy","icy","dessert-like","rich-indulgent","tart","juicy"] }
      ],
      "Creama": [
        { "name": "Coffee Creama", "tags": ["best-selling","coffee","salty-milk-foam","velvety-foam","chocolatey","sweet","creamy","rich-indulgent","bold","silky-smooth"] },
        { "name": "Wintermelon Creama", "tags": ["pure-tea","salty-milk-foam","velvety-foam","caramel","honeyed","savory-sweet","balanced","creamy","sweet","delicate"] }
      ],
      "Tea Mojito": [
        { "name": "Lime Mojito", "tags": ["fruit-tea","green-tea","citrusy","tart","herbal-floral","light-refreshing","juicy","delicate","balanced","vegetal-grassy"] },
        { "name": "Peach Mojito", "tags": ["fruit-tea","green-tea","fruity","honeyed","citrusy","tart","light-refreshing","juicy","sweet","delicate"] }
      ]
    },
    "Chatime": {
      "Signatures": [
        { "name": "Premium Boba Milk Tea", "tags": ["milk-tea","black-tea","best-selling","signature","chewy-pearls","creamy","sweet","balanced","malty","rich-indulgent"] },
        { "name": "Taichi Supreme Milk Tea", "tags": ["milk-tea","matcha","black-tea","signature","creamy","vegetal-grassy","sweet","velvety-foam","balanced","rich-indulgent"] },
        { "name": "Thai Milk Tea", "tags": ["milk-tea","black-tea","sweet","creamy","warm-spiced","best-selling","rich-indulgent","bold","balanced","chewy-pearls"] },
        { "name": "Roasted Milk Tea", "tags": ["milk-tea","oolong","roasted-toasty","nutty","creamy","sweet","earthy","best-selling","balanced","chewy-pearls"] }
      ],
      "Milk Tea Classics": [
        { "name": "Pearl Milk Tea", "tags": ["milk-tea","black-tea","chewy-pearls","best-selling","creamy","sweet","malty","balanced","silky-smooth","signature"] },
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","nutty","sweet","creamy","velvety-foam","dessert-like","balanced","rich-indulgent","silky-smooth"] },
        { "name": "Wintermelon Milk Tea", "tags": ["milk-tea","black-tea","caramel","honeyed","sweet","creamy","light-refreshing","balanced","delicate","silky-smooth"] }
      ],
      "Fresh Tea": [
        { "name": "Jasmine Green Tea", "tags": ["pure-tea","green-tea","jasmine","floral","light-refreshing","delicate","vegetal-grassy","balanced","icy","tart"] },
        { "name": "Assam Black Tea", "tags": ["pure-tea","black-tea","malty","bold","earthy","light-refreshing","balanced","roasted-toasty","icy","bittersweet"] },
        { "name": "Wintermelon Tea", "tags": ["pure-tea","caramel","honeyed","sweet","light-refreshing","delicate","icy","balanced","vanilla","juicy"] }
      ],
      "Fruity": [
        { "name": "Mango Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","sweet","juicy","light-refreshing","tart","icy","balanced"] },
        { "name": "Strawberry Frui-Tea", "tags": ["fruit-tea","green-tea","berry","fruity","sweet","tart","juicy","light-refreshing","icy","balanced"] },
        { "name": "Passionfruit Fruity Iced Green Tea", "tags": ["fruit-tea","green-tea","tropical","citrusy","tart","fruity","light-refreshing","juicy","icy","balanced"] }
      ],
      "Smoothies": [
        { "name": "Signature Boba Smoothie", "tags": ["smoothie-slush","milk-tea","icy","creamy","sweet","chewy-pearls","dessert-like","signature","rich-indulgent","frothy"] },
        { "name": "Taro Smoothie", "tags": ["smoothie-slush","taro","icy","creamy","nutty","sweet","dessert-like","velvety-foam","rich-indulgent","silky-smooth"] },
        { "name": "Watermelon Slush", "tags": ["smoothie-slush","fruity","tropical","icy","sweet","juicy","light-refreshing","tart","berry","balanced"] }
      ]
    },
    "Happy Lemon": {
      "Rock Salt Cheese Series": [
        { "name": "Black Tea with Salted Cheese", "tags": ["pure-tea","black-tea","salty-milk-foam","signature","best-selling","savory-sweet","bold","creamy","malty","velvety-foam"] },
        { "name": "Green Tea with Salted Cheese", "tags": ["pure-tea","green-tea","salty-milk-foam","savory-sweet","vegetal-grassy","creamy","delicate","velvety-foam","balanced","light-refreshing"] },
        { "name": "Oolong Tea with Salted Cheese", "tags": ["pure-tea","oolong","salty-milk-foam","savory-sweet","roasted-toasty","creamy","earthy","velvety-foam","balanced","light-refreshing"] },
        { "name": "Matcha Latte with Tiramisu Salted Cheese", "tags": ["milk-tea","matcha","salty-milk-foam","savory-sweet","dessert-like","chocolatey","creamy","vegetal-grassy","rich-indulgent","velvety-foam"] }
      ],
      "Milk Tea Series": [
        { "name": "Classic Milk Tea", "tags": ["milk-tea","black-tea","creamy","sweet","malty","balanced","silky-smooth","best-selling","rich-indulgent","chewy-pearls"] },
        { "name": "Brown Sugar Pearl Milk Tea", "tags": ["milk-tea","brown-sugar-series","caramel","chewy-pearls","sweet","creamy","rich-indulgent","dessert-like","honeyed","bold"] },
        { "name": "Roasted Milk Tea", "tags": ["milk-tea","oolong","roasted-toasty","nutty","creamy","sweet","earthy","balanced","malty","silky-smooth"] },
        { "name": "Taro Milk Tea with Pearls", "tags": ["milk-tea","taro","nutty","sweet","creamy","chewy-pearls","dessert-like","velvety-foam","rich-indulgent","silky-smooth"] }
      ],
      "Fresh Lemon Series": [
        { "name": "Fresh Lemon with Honey", "tags": ["fruit-tea","citrusy","honeyed","tart","sweet","light-refreshing","juicy","icy","balanced","delicate"] },
        { "name": "Kumquat Lemon with Passionfruit", "tags": ["fruit-tea","citrusy","tropical","tart","fruity","light-refreshing","juicy","icy","bittersweet","balanced"] }
      ],
      "Fresh Fruit Series": [
        { "name": "Strawberry Green Tea with Lychee Jelly", "tags": ["fruit-tea","green-tea","berry","fruity","sweet","tart","chewy-pearls","light-refreshing","juicy","icy"] },
        { "name": "Mango Passionfruit Iced Tea", "tags": ["fruit-tea","green-tea","tropical","citrusy","fruity","tart","sweet","juicy","light-refreshing","balanced"] }
      ]
    },
    "Tiger Sugar": {
      "Signature Tiger Drinks": [
        { "name": "Tiger Sugar Original Brown Sugar Boba Milk", "tags": ["brown-sugar-series","caramel","chewy-pearls","signature","best-selling","creamy","sweet","rich-indulgent","dessert-like","silky-smooth"] },
        { "name": "Brown Sugar Boba Milk with Cream Mousse", "tags": ["brown-sugar-series","caramel","salty-milk-foam","savory-sweet","creamy","chewy-pearls","rich-indulgent","dessert-like","signature","velvety-foam"] },
        { "name": "Brown Sugar Pearl Milk", "tags": ["brown-sugar-series","caramel","chewy-pearls","creamy","sweet","rich-indulgent","dessert-like","bold","honeyed","silky-smooth"] },
        { "name": "Oat Milk Brown Sugar Boba", "tags": ["brown-sugar-series","caramel","chewy-pearls","nutty","creamy","sweet","rich-indulgent","balanced","silky-smooth","dessert-like"] }
      ],
      "Milk Tea Series": [
        { "name": "Classic Brown Sugar Milk Tea", "tags": ["milk-tea","brown-sugar-series","black-tea","caramel","sweet","creamy","malty","balanced","rich-indulgent","silky-smooth"] },
        { "name": "Taro Milk Tea with Boba", "tags": ["milk-tea","taro","nutty","sweet","creamy","chewy-pearls","dessert-like","velvety-foam","rich-indulgent","silky-smooth"] },
        { "name": "Matcha Milk Tea with Boba", "tags": ["milk-tea","matcha","vegetal-grassy","creamy","sweet","chewy-pearls","bittersweet","velvety-foam","balanced","rich-indulgent"] },
        { "name": "Roasted Oolong Milk Tea", "tags": ["milk-tea","oolong","roasted-toasty","nutty","creamy","earthy","sweet","balanced","malty","silky-smooth"] }
      ],
      "Fruit Tea Series": [
        { "name": "Passion Fruit Green Tea", "tags": ["fruit-tea","green-tea","tropical","citrusy","tart","fruity","light-refreshing","juicy","icy","balanced"] },
        { "name": "Lychee Green Tea", "tags": ["fruit-tea","green-tea","floral","fruity","sweet","delicate","light-refreshing","juicy","tart","icy"] },
        { "name": "Peach Oolong Tea", "tags": ["fruit-tea","oolong","fruity","sweet","roasted-toasty","juicy","tart","light-refreshing","balanced","icy"] }
      ],
      "Seasonal Specials": [
        { "name": "Hojicha Brown Sugar Milk", "tags": ["brown-sugar-series","roasted-toasty","caramel","nutty","creamy","sweet","earthy","rich-indulgent","smoky","silky-smooth"] },
        { "name": "Black Sesame Milk Tea", "tags": ["milk-tea","brown-sugar-series","nutty","roasted-toasty","creamy","sweet","dessert-like","rich-indulgent","earthy","silky-smooth"] }
      ]
    },
    "Boba Guys": {
      "Build Your Own (Classic Milk Tea)": [
        { "name": "Classic Black (Boba Guys Blend No. 1)", "tags": ["milk-tea","black-tea","signature","best-selling","malty","creamy","balanced","bold","chewy-pearls","silky-smooth"] },
        { "name": "Jasmine Green", "tags": ["milk-tea","green-tea","jasmine","floral","delicate","silky-smooth","vegetal-grassy","light-refreshing","balanced","creamy"] },
        { "name": "Rose Black", "tags": ["milk-tea","black-tea","floral","herbal-floral","delicate","sweet","creamy","balanced","malty","silky-smooth"] },
        { "name": "Tie Guan Yin Oolong", "tags": ["milk-tea","oolong","nutty","floral","roasted-toasty","creamy","earthy","balanced","delicate","silky-smooth"] }
      ],
      "Matcha & Hojicha": [
        { "name": "Strawberry Matcha Latte", "tags": ["matcha","berry","signature","best-selling","vegetal-grassy","creamy","sweet","bittersweet","fruity","velvety-foam"] },
        { "name": "Matcha Latte", "tags": ["matcha","green-tea","vegetal-grassy","creamy","bittersweet","velvety-foam","balanced","delicate","silky-smooth","rich-indulgent"] },
        { "name": "Hojicha Latte", "tags": ["pure-tea","green-tea","roasted-toasty","nutty","smoky","creamy","earthy","light-refreshing","balanced","silky-smooth"] }
      ],
      "Specialty": [
        { "name": "Hong Kong Milk Tea", "tags": ["milk-tea","black-tea","bold","malty","creamy","sweet","rich-indulgent","balanced","best-selling","silky-smooth"] },
        { "name": "Ube Latte", "tags": ["taro","coconut","vanilla","sweet","creamy","dessert-like","nutty","rich-indulgent","velvety-foam","silky-smooth"] },
        { "name": "Thai Tea", "tags": ["milk-tea","green-tea","warm-spiced","sweet","creamy","bold","rich-indulgent","balanced","caramel","silky-smooth"] },
        { "name": "Korean Banana Milk", "tags": ["vanilla","sweet","creamy","fruity","dessert-like","silky-smooth","honeyed","balanced","nutty","rich-indulgent"] }
      ],
      "Fruit Frescas": [
        { "name": "Strawberry Jasmine", "tags": ["fruit-tea","green-tea","jasmine","berry","floral","fruity","tart","light-refreshing","juicy","icy"] },
        { "name": "Lychee Oolong", "tags": ["fruit-tea","oolong","floral","vanilla","fruity","sweet","delicate","light-refreshing","juicy","icy"] },
        { "name": "Berry Hibiscus", "tags": ["fruit-tea","herbal-floral","berry","tart","fruity","citrusy","light-refreshing","juicy","icy","floral"] }
      ]
    },
    "Ten Ren's Tea": {
      "Milk Tea": [
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","nutty","vanilla","sweet","creamy","chewy-pearls","best-selling","rich-indulgent","dessert-like"] },
        { "name": "Roasted Oolong Milk Tea", "tags": ["milk-tea","oolong","roasted-toasty","smoky","earthy","creamy","signature","balanced","bold","chewy-pearls"] },
        { "name": "Brown Sugar Milk Tea", "tags": ["milk-tea","brown-sugar-series","caramel","sweet","honeyed","creamy","rich-indulgent","chewy-pearls","black-tea","dessert-like"] },
        { "name": "House Jasmine Green Milk Tea", "tags": ["milk-tea","jasmine","green-tea","floral","delicate","creamy","light-refreshing","balanced","sweet","chewy-pearls"] },
        { "name": "Thai Milk Tea", "tags": ["milk-tea","black-tea","warm-spiced","sweet","creamy","rich-indulgent","bold","chewy-pearls","best-selling","caramel"] },
        { "name": "Winter Melon Milk Tea", "tags": ["milk-tea","honeyed","caramel","sweet","creamy","silky-smooth","balanced","best-selling","delicate","chewy-pearls"] }
      ],
      "Milk Series": [
        { "name": "Taro Tango Milk", "tags": ["taro","nutty","vanilla","sweet","creamy","velvety-foam","rich-indulgent","dessert-like","silky-smooth","chewy-pearls"] },
        { "name": "Brown Sugar Fresh Milk with Boba", "tags": ["brown-sugar-series","caramel","sweet","honeyed","creamy","rich-indulgent","chewy-pearls","signature","best-selling","dessert-like"] },
        { "name": "Brown Sugar Fresh Milk with CC", "tags": ["brown-sugar-series","caramel","salty-milk-foam","savory-sweet","creamy","velvety-foam","rich-indulgent","chewy-pearls","dessert-like","signature"] }
      ],
      "Teazers": [
        { "name": "Passion Fruit Mango Teazer", "tags": ["fruit-tea","tropical","fruity","tart","citrusy","juicy","icy","light-refreshing","best-selling","chewy-pearls"] },
        { "name": "Mango Teazer", "tags": ["fruit-tea","tropical","fruity","sweet","juicy","icy","light-refreshing","balanced","delicate","honeyed"] },
        { "name": "Thai Tea Teazer", "tags": ["fruit-tea","black-tea","warm-spiced","sweet","caramel","icy","light-refreshing","bold","balanced","juicy"] }
      ],
      "Iced Tea": [
        { "name": "Passion Fruit Mango Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","tart","citrusy","icy","light-refreshing","best-selling","juicy"] },
        { "name": "Honey Lemon Iced Tea", "tags": ["fruit-tea","green-tea","honeyed","citrusy","tart","sweet","bittersweet","icy","light-refreshing","balanced"] },
        { "name": "Winter Melon Iced Tea", "tags": ["fruit-tea","honeyed","caramel","sweet","delicate","icy","light-refreshing","best-selling","balanced","silky-smooth"] }
      ],
      "Fresh Brew Pure Iced Tea": [
        { "name": "913 Ginseng King's Oolong", "tags": ["pure-tea","oolong","earthy","bittersweet","roasted-toasty","honeyed","bold","best-selling","signature","delicate"] },
        { "name": "Jin Xuan Oolong", "tags": ["pure-tea","oolong","creamy","floral","delicate","silky-smooth","vegetal-grassy","balanced","light-refreshing","honeyed"] },
        { "name": "High Mountain Oolong", "tags": ["pure-tea","oolong","floral","vegetal-grassy","delicate","light-refreshing","balanced","signature","honeyed","earthy"] }
      ]
    },
    "The Alley": {
      "Brown Sugar Deerioca Series": [
        { "name": "Brown Sugar Deerioca Milk", "tags": ["brown-sugar-series","caramel","sweet","honeyed","creamy","rich-indulgent","chewy-pearls","signature","best-selling","dessert-like"] },
        { "name": "Brown Sugar Deerioca Milk Tea", "tags": ["milk-tea","brown-sugar-series","black-tea","caramel","sweet","creamy","balanced","rich-indulgent","chewy-pearls","malty"] },
        { "name": "Brown Sugar Deerioca Matcha", "tags": ["brown-sugar-series","matcha","caramel","earthy","vegetal-grassy","creamy","rich-indulgent","chewy-pearls","best-selling","dessert-like"] },
        { "name": "Brown Sugar Deerioca Creme Brulee Milk", "tags": ["brown-sugar-series","caramel","roasted-toasty","sweet","creamy","velvety-foam","rich-indulgent","chewy-pearls","signature","dessert-like"] }
      ],
      "Milk Tea Series": [
        { "name": "Royal No.9 Milk Tea", "tags": ["milk-tea","black-tea","malty","bold","creamy","balanced","best-selling","signature","silky-smooth","roasted-toasty"] },
        { "name": "The Alley Trio Milk Tea", "tags": ["milk-tea","black-tea","malty","sweet","creamy","chewy-pearls","balanced","best-selling","rich-indulgent","bold"] },
        { "name": "Jasmine Green Milk Tea", "tags": ["milk-tea","jasmine","green-tea","floral","delicate","creamy","light-refreshing","balanced","chewy-pearls","vegetal-grassy"] },
        { "name": "Taro Red Bean Green Milk Tea", "tags": ["milk-tea","green-tea","taro","nutty","sweet","creamy","dessert-like","rich-indulgent","chewy-pearls","vanilla"] }
      ],
      "Snow Velvet Series": [
        { "name": "Snow Velvet Deerioca Tea Latte", "tags": ["brown-sugar-series","caramel","salty-milk-foam","savory-sweet","creamy","velvety-foam","rich-indulgent","chewy-pearls","signature","dessert-like"] },
        { "name": "Snow Velvet Peach Oolong Tea", "tags": ["oolong","fruity","roasted-toasty","salty-milk-foam","savory-sweet","velvety-foam","creamy","balanced","honeyed","delicate"] }
      ],
      "Crunchy Milk Series": [
        { "name": "Crunchy Tiramisu Milk Tea", "tags": ["milk-tea","coffee","chocolatey","caramel","sweet","creamy","rich-indulgent","dessert-like","best-selling","chewy-pearls"] },
        { "name": "Crunchy Cocoa Milk Tea", "tags": ["milk-tea","chocolatey","sweet","creamy","rich-indulgent","dessert-like","caramel","chewy-pearls","bold","best-selling"] }
      ],
      "Fruit Series": [
        { "name": "Passionfruit Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","tart","citrusy","icy","light-refreshing","best-selling","juicy"] },
        { "name": "Orange Lulu", "tags": ["fruit-tea","citrusy","fruity","tart","sweet","juicy","icy","light-refreshing","best-selling","tropical"] }
      ],
      "Aurora Series": [
        { "name": "Northern Lights", "tags": ["fruit-tea","herbal-floral","berry","tart","fruity","icy","smoothie-slush","light-refreshing","signature","floral"] },
        { "name": "Morning Dawn", "tags": ["fruit-tea","jasmine","green-tea","tropical","fruity","sweet","icy","smoothie-slush","floral","light-refreshing"] }
      ],
      "The Finest Collection": [
        { "name": "Peach Oolong Tea", "tags": ["pure-tea","oolong","fruity","roasted-toasty","floral","delicate","honeyed","light-refreshing","balanced","signature"] },
        { "name": "Uji Matcha Latte", "tags": ["matcha","green-tea","earthy","vegetal-grassy","creamy","rich-indulgent","silky-smooth","bold","signature","velvety-foam"] }
      ]
    },
    "Yi Fang": {
      "Fruit Tea": [
        { "name": "Yifang Fruit Tea", "tags": ["fruit-tea","tropical","fruity","citrusy","tart","sweet","juicy","icy","signature","best-selling"] },
        { "name": "Pineapple Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","tart","sweet","juicy","icy","light-refreshing","best-selling"] },
        { "name": "Passion Fruit Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","tart","citrusy","juicy","icy","light-refreshing","best-selling"] },
        { "name": "Aiyu Lemon Green Tea", "tags": ["fruit-tea","green-tea","citrusy","tart","fruity","juicy","icy","light-refreshing","delicate","best-selling"] },
        { "name": "Winter Melon Lemonade", "tags": ["fruit-tea","honeyed","caramel","citrusy","tart","sweet","icy","light-refreshing","juicy","balanced"] }
      ],
      "Sugarcane Series": [
        { "name": "Sugarcane Mountain Tea", "tags": ["pure-tea","green-tea","honeyed","sweet","earthy","delicate","light-refreshing","balanced","signature","best-selling"] },
        { "name": "Sugarcane Lemon Mountain Tea", "tags": ["fruit-tea","green-tea","citrusy","tart","honeyed","sweet","light-refreshing","juicy","balanced","icy"] },
        { "name": "Sugarcane Kumquat Green Tea", "tags": ["fruit-tea","green-tea","citrusy","tart","honeyed","fruity","light-refreshing","icy","juicy","delicate"] }
      ],
      "Tea Latte": [
        { "name": "Fresh Tea Latte", "tags": ["milk-tea","black-tea","creamy","sweet","balanced","silky-smooth","malty","signature","rich-indulgent","velvety-foam"] },
        { "name": "Fresh Taro Latte", "tags": ["taro","nutty","honeyed","sweet","creamy","rich-indulgent","dessert-like","silky-smooth","vanilla","chewy-pearls"] },
        { "name": "Winter Melon Latte", "tags": ["honeyed","caramel","sweet","creamy","delicate","silky-smooth","light-refreshing","balanced","velvety-foam","vanilla"] },
        { "name": "Kyoto Uji Matcha Latte", "tags": ["matcha","green-tea","earthy","vegetal-grassy","creamy","rich-indulgent","silky-smooth","bold","balanced","velvety-foam"] }
      ],
      "Brown Sugar Series": [
        { "name": "Brown Sugar Pearl Latte", "tags": ["brown-sugar-series","caramel","sweet","honeyed","creamy","silky-smooth","chewy-pearls","rich-indulgent","best-selling","dessert-like"] },
        { "name": "Brown Sugar Pearl Tea Latte", "tags": ["milk-tea","brown-sugar-series","black-tea","caramel","sweet","creamy","chewy-pearls","balanced","best-selling","malty"] }
      ],
      "Yogurt Series": [
        { "name": "Yogurt Pineapple Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","tart","creamy","light-refreshing","juicy","balanced","velvety-foam"] }
      ],
      "Frappe & Seasonal": [
        { "name": "Mango Pomelo Sago", "tags": ["smoothie-slush","tropical","fruity","citrusy","sweet","creamy","coconut","icy","dessert-like","juicy"] },
        { "name": "Longan Ginger Tea", "tags": ["pure-tea","black-tea","warm-spiced","honeyed","sweet","earthy","bold","balanced","roasted-toasty","delicate"] }
      ]
    },
    "Xing Fu Tang": {
      "Brown Sugar Boba Series": [
        { "name": "Brown Sugar Boba Milk", "tags": ["brown-sugar-series","caramel","sweet","honeyed","creamy","velvety-foam","chewy-pearls","rich-indulgent","signature","best-selling"] },
        { "name": "Gold Foil Brown Sugar Boba Milk", "tags": ["brown-sugar-series","caramel","sweet","honeyed","creamy","velvety-foam","chewy-pearls","rich-indulgent","signature","dessert-like"] },
        { "name": "Brown Sugar Boba Milk Tea", "tags": ["milk-tea","brown-sugar-series","black-tea","caramel","sweet","creamy","chewy-pearls","balanced","malty","best-selling"] },
        { "name": "Oolong Boba Milk Tea", "tags": ["milk-tea","brown-sugar-series","oolong","roasted-toasty","caramel","floral","creamy","chewy-pearls","balanced","bold"] },
        { "name": "Herbal Jelly Boba Milk", "tags": ["brown-sugar-series","herbal-floral","bittersweet","caramel","creamy","chewy-pearls","dessert-like","rich-indulgent","earthy","sweet"] },
        { "name": "Dalgona Coffee Boba Milk", "tags": ["coffee","brown-sugar-series","caramel","sweet","creamy","velvety-foam","chewy-pearls","rich-indulgent","bold","dessert-like"] },
        { "name": "Boba Cocoa", "tags": ["brown-sugar-series","chocolatey","caramel","sweet","creamy","chewy-pearls","rich-indulgent","dessert-like","velvety-foam","bold"] }
      ],
      "Specialty Milk Series": [
        { "name": "Matcha Boba Milk", "tags": ["matcha","green-tea","earthy","vegetal-grassy","bittersweet","creamy","chewy-pearls","rich-indulgent","best-selling","balanced"] },
        { "name": "Strawberry Boba Milk", "tags": ["berry","fruity","sweet","creamy","chewy-pearls","rich-indulgent","dessert-like","silky-smooth","juicy","velvety-foam"] },
        { "name": "Taro Boba Milk", "tags": ["taro","nutty","vanilla","sweet","creamy","chewy-pearls","rich-indulgent","dessert-like","silky-smooth","balanced"] },
        { "name": "Matcha Red Bean", "tags": ["matcha","green-tea","earthy","vegetal-grassy","nutty","sweet","creamy","dessert-like","bittersweet","rich-indulgent"] }
      ],
      "Fruit Tea Series": [
        { "name": "Mango Passion Fruit Green Tea", "tags": ["fruit-tea","green-tea","jasmine","tropical","fruity","tart","citrusy","icy","light-refreshing","best-selling"] },
        { "name": "Jasmine Green Tea with Honeycomb", "tags": ["fruit-tea","jasmine","green-tea","floral","honeyed","citrusy","delicate","light-refreshing","sweet","icy"] },
        { "name": "Grapefruit Green Tea", "tags": ["fruit-tea","green-tea","citrusy","tart","fruity","bittersweet","light-refreshing","icy","juicy","delicate"] },
        { "name": "Damascus Rose Tea with Limes", "tags": ["pure-tea","herbal-floral","floral","citrusy","tart","delicate","light-refreshing","balanced","icy","fruity"] },
        { "name": "Kirin Roasted Oolong Tea", "tags": ["pure-tea","oolong","roasted-toasty","smoky","earthy","floral","bold","balanced","honeyed","delicate"] }
      ],
      "Specialty Fruit & Refreshers": [
        { "name": "Mango Smoothie with Bunny Panna Cotta", "tags": ["smoothie-slush","tropical","fruity","sweet","creamy","icy","dessert-like","juicy","chewy-pearls","rich-indulgent"] },
        { "name": "Mango Pomelo Sago", "tags": ["smoothie-slush","tropical","fruity","citrusy","sweet","creamy","coconut","icy","dessert-like","juicy"] }
      ],
      "Desserts": [
        { "name": "Brown Sugar Milk Tea Soft Serve", "tags": ["brown-sugar-series","caramel","sweet","honeyed","creamy","velvety-foam","chewy-pearls","icy","dessert-like","signature"] }
      ]
    },
    "HEYTEA": {
      "Classics (Cheese Cloud Tea)": [
        { "name": "Fluffy Cloud Mango", "tags": ["fruit-tea","green-tea","jasmine","fruity","tropical","salty-milk-foam","creamy","best-selling","signature","juicy"] },
        { "name": "Fluffy Cloud Crisp Grape", "tags": ["fruit-tea","green-tea","fruity","berry","tart","salty-milk-foam","velvety-foam","light-refreshing","signature","juicy"] },
        { "name": "Cheese Mango", "tags": ["fruit-tea","green-tea","jasmine","fruity","tropical","salty-milk-foam","creamy","best-selling","juicy","balanced"] },
        { "name": "Cloud Longjing Milk Tea", "tags": ["milk-tea","green-tea","vegetal-grassy","roasted-toasty","salty-milk-foam","creamy","velvety-foam","delicate","balanced","signature"] }
      ],
      "Fruit Tea": [
        { "name": "Very Grape", "tags": ["fruit-tea","green-tea","fruity","berry","tart","icy","light-refreshing","juicy","best-selling","signature"] },
        { "name": "Mango Grapefruit Boom", "tags": ["fruit-tea","green-tea","fruity","tropical","citrusy","tart","icy","light-refreshing","best-selling","juicy"] },
        { "name": "Peach Fruit Tea", "tags": ["fruit-tea","green-tea","jasmine","fruity","sweet","honeyed","icy","light-refreshing","juicy","delicate"] }
      ],
      "Matcha": [
        { "name": "Triple Supreme Matcha Latte", "tags": ["milk-tea","matcha","green-tea","earthy","vegetal-grassy","creamy","velvety-foam","rich-indulgent","signature","balanced"] },
        { "name": "Cloud Matcha Latte", "tags": ["milk-tea","matcha","green-tea","earthy","vegetal-grassy","salty-milk-foam","creamy","velvety-foam","balanced","delicate"] }
      ],
      "Bobo Milk Tea (Brown Sugar)": [
        { "name": "Supreme Brown Sugar Bobo Milk (Original)", "tags": ["brown-sugar-series","milk-tea","caramel","sweet","creamy","chewy-pearls","rich-indulgent","dessert-like","best-selling","signature"] },
        { "name": "Supreme Brown Sugar Bobo Milk Tea", "tags": ["brown-sugar-series","milk-tea","black-tea","caramel","sweet","malty","creamy","chewy-pearls","rich-indulgent","dessert-like"] }
      ]
    },
    "Machi Machi": {
      "Milk Tea & Fresh Milk": [
        { "name": "Black Milk Tea with Creme Brulee", "tags": ["milk-tea","black-tea","caramel","sweet","malty","creamy","silky-smooth","rich-indulgent","dessert-like","signature"] },
        { "name": "Mini Taro Ball Black Milk Tea", "tags": ["milk-tea","black-tea","taro","nutty","sweet","creamy","chewy-pearls","silky-smooth","dessert-like","best-selling"] },
        { "name": "Black Sugar Fresh Milk", "tags": ["brown-sugar-series","milk-tea","caramel","sweet","malty","creamy","silky-smooth","chewy-pearls","rich-indulgent","dessert-like"] },
        { "name": "Matcha Latte with Red Bean Brulee", "tags": ["milk-tea","matcha","green-tea","earthy","vegetal-grassy","sweet","creamy","velvety-foam","dessert-like","rich-indulgent"] }
      ],
      "Cream Cheese Foam Tea": [
        { "name": "Cheese Foam Black Tea", "tags": ["pure-tea","black-tea","savory-sweet","malty","roasted-toasty","salty-milk-foam","creamy","velvety-foam","balanced","signature"] },
        { "name": "Cheese Foam Jasmine Green Tea", "tags": ["pure-tea","green-tea","jasmine","floral","savory-sweet","salty-milk-foam","velvety-foam","delicate","light-refreshing","balanced"] },
        { "name": "Cheese Foam Oolong Tieguanyin", "tags": ["pure-tea","oolong","roasted-toasty","earthy","savory-sweet","salty-milk-foam","velvety-foam","bold","balanced","signature"] }
      ],
      "Fresh Tea Series": [
        { "name": "Sun Moon Lake Black Tea", "tags": ["pure-tea","black-tea","malty","roasted-toasty","earthy","bold","bittersweet","light-refreshing","balanced","signature"] },
        { "name": "Baihao Jasmine Green Tea", "tags": ["pure-tea","green-tea","jasmine","floral","delicate","vegetal-grassy","light-refreshing","tart","balanced","honeyed"] },
        { "name": "Wintermelon Spring Tea", "tags": ["pure-tea","green-tea","sweet","honeyed","caramel","earthy","light-refreshing","balanced","delicate","juicy"] }
      ],
      "Fresh Fruit Tea": [
        { "name": "Strawberry Slush with Cream Cheese Foam", "tags": ["smoothie-slush","fruit-tea","fruity","berry","tart","icy","salty-milk-foam","creamy","juicy","dessert-like"] },
        { "name": "Orange Green Tea", "tags": ["fruit-tea","green-tea","fruity","citrusy","tart","tropical","icy","light-refreshing","juicy","balanced"] },
        { "name": "Fresh Strawberry Latte with Panna Cotta", "tags": ["milk-tea","fruity","berry","sweet","vanilla","creamy","silky-smooth","velvety-foam","dessert-like","rich-indulgent"] }
      ]
    },
    "Molly Tea": {
      "Fresh Milk Tea Series": [
        { "name": "Jasmine Milk", "tags": ["milk-tea","green-tea","jasmine","floral","sweet","creamy","velvety-foam","silky-smooth","signature","best-selling"] },
        { "name": "Osmanthus Dragonwell", "tags": ["milk-tea","green-tea","floral","honeyed","roasted-toasty","vegetal-grassy","creamy","velvety-foam","delicate","balanced"] },
        { "name": "Dancong Oolong", "tags": ["milk-tea","oolong","floral","roasted-toasty","earthy","honeyed","creamy","velvety-foam","bold","balanced"] },
        { "name": "White Orchid Golden Lily", "tags": ["milk-tea","oolong","green-tea","floral","creamy","velvety-foam","silky-smooth","delicate","balanced","vanilla"] },
        { "name": "Matcha Premium", "tags": ["milk-tea","matcha","green-tea","earthy","vegetal-grassy","bittersweet","creamy","velvety-foam","rich-indulgent","bold"] },
        { "name": "Peach Oolong", "tags": ["milk-tea","oolong","fruity","floral","sweet","honeyed","creamy","silky-smooth","light-refreshing","delicate"] }
      ],
      "Snowy Whipped Cream Series": [
        { "name": "Jasmine Blossom", "tags": ["milk-tea","green-tea","jasmine","floral","sweet","nutty","creamy","velvety-foam","dessert-like","signature"] },
        { "name": "Gardenia Blossom", "tags": ["milk-tea","green-tea","floral","sweet","nutty","delicate","creamy","velvety-foam","dessert-like","balanced"] },
        { "name": "Oolong Bite", "tags": ["milk-tea","oolong","floral","roasted-toasty","nutty","creamy","velvety-foam","rich-indulgent","dessert-like","bold"] }
      ],
      "Fresh Oat Milk Tea Series": [
        { "name": "Premium Oat", "tags": ["milk-tea","green-tea","jasmine","nutty","floral","creamy","silky-smooth","light-refreshing","delicate","balanced"] },
        { "name": "Gardenia Oat", "tags": ["milk-tea","green-tea","floral","nutty","sweet","creamy","silky-smooth","light-refreshing","delicate","balanced"] }
      ]
    },
    "7 Leaves Cafe": {
      "Tea & Juice": [
        { "name": "Jasmine Milk Tea", "tags": ["milk-tea","green-tea","jasmine","floral","sweet","creamy","silky-smooth","balanced","best-selling","signature"] },
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","nutty","sweet","vanilla","creamy","silky-smooth","dessert-like","best-selling","signature"] },
        { "name": "Mung Bean Milk Tea", "tags": ["milk-tea","nutty","earthy","sweet","savory-sweet","creamy","silky-smooth","balanced","signature","best-selling"] },
        { "name": "Sea Cream Jasmine Tea", "tags": ["pure-tea","green-tea","jasmine","floral","savory-sweet","salty-milk-foam","creamy","velvety-foam","light-refreshing","signature"] },
        { "name": "Green Thai Tea", "tags": ["milk-tea","green-tea","sweet","creamy","vanilla","silky-smooth","balanced","rich-indulgent","bold","dessert-like"] },
        { "name": "Strawberry Hibiscus Tea", "tags": ["fruit-tea","herbal-floral","fruity","berry","tart","floral","icy","light-refreshing","juicy","citrusy"] }
      ],
      "Coffee": [
        { "name": "Vietnamese Coffee", "tags": ["coffee","bold","roasted-toasty","sweet","chocolatey","caramel","creamy","silky-smooth","rich-indulgent","signature"] },
        { "name": "House Coffee", "tags": ["coffee","bold","roasted-toasty","smoky","bittersweet","creamy","silky-smooth","rich-indulgent","balanced","best-selling"] },
        { "name": "Caramel Macchiato", "tags": ["coffee","caramel","sweet","roasted-toasty","creamy","silky-smooth","velvety-foam","rich-indulgent","dessert-like","balanced"] },
        { "name": "Spanish Latte", "tags": ["coffee","sweet","caramel","roasted-toasty","creamy","velvety-foam","silky-smooth","rich-indulgent","balanced","dessert-like"] }
      ],
      "Specialty Drinks (Shh)": [
        { "name": "Love Cream", "tags": ["milk-tea","green-tea","jasmine","caramel","sweet","floral","creamy","silky-smooth","dessert-like","signature"] },
        { "name": "Black and Tan", "tags": ["milk-tea","coffee","green-tea","jasmine","bold","bittersweet","roasted-toasty","creamy","balanced","signature"] },
        { "name": "Tea-Rex", "tags": ["milk-tea","matcha","green-tea","earthy","vegetal-grassy","nutty","sweet","creamy","dessert-like","signature"] },
        { "name": "Strawberry Sunset", "tags": ["fruit-tea","herbal-floral","fruity","berry","tropical","tart","icy","light-refreshing","juicy","signature"] }
      ]
    },
    "Tastea": {
      "Specialteas (Artisan Fruit Teas)": [
        { "name": "Peach Me Sweetea", "tags": ["fruit-tea","black-tea","fruity","berry","sweet","juicy","icy","light-refreshing","best-selling","signature"] },
        { "name": "Lychee Peachee", "tags": ["fruit-tea","black-tea","fruity","tropical","sweet","juicy","light-refreshing","icy","chewy-pearls","honeyed"] },
        { "name": "Strawberry Ecsteasy", "tags": ["fruit-tea","black-tea","berry","fruity","sweet","tart","juicy","icy","chewy-pearls","light-refreshing"] },
        { "name": "The Unknown", "tags": ["fruit-tea","black-tea","tropical","fruity","citrusy","tart","juicy","icy","light-refreshing","bold"] },
        { "name": "Bootea Shaker", "tags": ["fruit-tea","black-tea","tropical","fruity","sweet","juicy","icy","light-refreshing","chewy-pearls","balanced"] }
      ],
      "Simpliciteas": [
        { "name": "Jasmine Iced Tea", "tags": ["pure-tea","green-tea","jasmine","floral","delicate","vegetal-grassy","light-refreshing","icy","balanced","honeyed"] },
        { "name": "Salted Cream Jasmine", "tags": ["pure-tea","green-tea","jasmine","floral","savory-sweet","salty-milk-foam","velvety-foam","creamy","balanced","delicate"] },
        { "name": "The Great White", "tags": ["fruit-tea","pure-tea","fruity","sweet","light-refreshing","delicate","icy","juicy","balanced","honeyed"] }
      ],
      "Milk Teas": [
        { "name": "Thai Milk Tea", "tags": ["milk-tea","black-tea","sweet","creamy","warm-spiced","rich-indulgent","bold","chewy-pearls","best-selling","dessert-like"] },
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","nutty","sweet","creamy","velvety-foam","silky-smooth","rich-indulgent","best-selling","dessert-like"] },
        { "name": "Honeydew Milk Tea", "tags": ["milk-tea","fruity","sweet","creamy","silky-smooth","honeyed","light-refreshing","vanilla","balanced","chewy-pearls"] },
        { "name": "Matcha Milk Tea", "tags": ["milk-tea","matcha","green-tea","vegetal-grassy","earthy","creamy","sweet","velvety-foam","balanced","bittersweet"] },
        { "name": "Golden Milk Tea", "tags": ["milk-tea","black-tea","brown-sugar-series","caramel","sweet","creamy","chewy-pearls","honeyed","rich-indulgent","signature"] }
      ],
      "Smoothies": [
        { "name": "Taro Fantasy", "tags": ["smoothie-slush","taro","nutty","sweet","creamy","velvety-foam","icy","dessert-like","rich-indulgent","silky-smooth"] },
        { "name": "Avocado Avalanche", "tags": ["smoothie-slush","nutty","creamy","velvety-foam","sweet","rich-indulgent","silky-smooth","icy","dessert-like","balanced"] }
      ],
      "Slushy Freeze": [
        { "name": "Mango All the Way!", "tags": ["smoothie-slush","fruit-tea","tropical","fruity","sweet","icy","juicy","light-refreshing","tart","best-selling"] },
        { "name": "Peach Me Freezie", "tags": ["smoothie-slush","fruity","berry","sweet","icy","juicy","light-refreshing","tart","frothy","balanced"] }
      ]
    },
    "Feng Cha": {
      "Milk Tea": [
        { "name": "Boba Milk Tea", "tags": ["milk-tea","black-tea","brown-sugar-series","sweet","creamy","chewy-pearls","caramel","best-selling","signature","balanced"] },
        { "name": "Oolong Milk Tea", "tags": ["milk-tea","oolong","roasted-toasty","earthy","creamy","nutty","balanced","smoky","silky-smooth","bold"] },
        { "name": "Earl Grey Milk Tea", "tags": ["milk-tea","black-tea","floral","citrusy","creamy","delicate","balanced","herbal-floral","silky-smooth","bold"] },
        { "name": "Cookies & Cream Milk Tea", "tags": ["milk-tea","black-tea","chocolatey","sweet","creamy","velvety-foam","salty-milk-foam","dessert-like","rich-indulgent","best-selling"] },
        { "name": "Taro Milk Tea", "tags": ["milk-tea","taro","green-tea","nutty","sweet","creamy","silky-smooth","velvety-foam","rich-indulgent","dessert-like"] },
        { "name": "Thai Milk Tea", "tags": ["milk-tea","black-tea","sweet","warm-spiced","creamy","bold","rich-indulgent","caramel","dessert-like","balanced"] }
      ],
      "Fruit Drinks": [
        { "name": "Strawberry Overload", "tags": ["fruit-tea","oolong","berry","fruity","sweet","tart","juicy","light-refreshing","icy","balanced"] },
        { "name": "Mango Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","sweet","juicy","light-refreshing","vegetal-grassy","icy","tart"] },
        { "name": "Overflowing Grapefruit", "tags": ["fruit-tea","green-tea","citrusy","fruity","tart","bittersweet","juicy","light-refreshing","icy","vegetal-grassy"] },
        { "name": "Kiwi Basil Green Tea", "tags": ["fruit-tea","green-tea","fruity","tart","citrusy","juicy","light-refreshing","vegetal-grassy","icy","chewy-pearls"] }
      ],
      "Blended Series": [
        { "name": "Mango Fantasy", "tags": ["smoothie-slush","tropical","fruity","sweet","creamy","icy","coconut","chewy-pearls","rich-indulgent","best-selling"] },
        { "name": "Cookie Crush", "tags": ["smoothie-slush","chocolatey","sweet","creamy","velvety-foam","icy","dessert-like","rich-indulgent","salty-milk-foam","frothy"] },
        { "name": "Strawberry Breeze", "tags": ["smoothie-slush","berry","fruity","sweet","creamy","icy","juicy","tart","velvety-foam","dessert-like"] },
        { "name": "Taro Breeze", "tags": ["smoothie-slush","taro","nutty","sweet","creamy","icy","silky-smooth","rich-indulgent","dessert-like","velvety-foam"] }
      ],
      "Matcha Series": [
        { "name": "Matcha Latte", "tags": ["matcha","green-tea","earthy","vegetal-grassy","creamy","bittersweet","velvety-foam","balanced","delicate","rich-indulgent"] },
        { "name": "Strawberry Matcha Latte", "tags": ["matcha","green-tea","berry","fruity","sweet","creamy","vegetal-grassy","velvety-foam","tart","dessert-like"] }
      ],
      "Dirty Series": [
        { "name": "Creme Brulee Dirty Boba", "tags": ["brown-sugar-series","milk-tea","caramel","sweet","creamy","chewy-pearls","dessert-like","rich-indulgent","velvety-foam","signature"] }
      ]
    },
    "Sunright Tea Studio": {
      "Sunright Brown Sugar Boba Milk": [
        { "name": "Sunright Boba Milk Tea", "tags": ["brown-sugar-series","milk-tea","black-tea","caramel","sweet","creamy","chewy-pearls","rich-indulgent","best-selling","signature"] },
        { "name": "Creme Brulee Boba Milk", "tags": ["brown-sugar-series","caramel","sweet","creamy","velvety-foam","chewy-pearls","dessert-like","rich-indulgent","roasted-toasty","signature"] },
        { "name": "Oreo Brulee Boba Milk", "tags": ["brown-sugar-series","chocolatey","caramel","sweet","creamy","velvety-foam","chewy-pearls","dessert-like","rich-indulgent","best-selling"] },
        { "name": "Taro Boba Milk", "tags": ["brown-sugar-series","taro","nutty","sweet","creamy","silky-smooth","chewy-pearls","rich-indulgent","dessert-like","velvety-foam"] }
      ],
      "Milk Tea": [
        { "name": "Ceylon Milk Tea", "tags": ["milk-tea","black-tea","malty","bold","creamy","roasted-toasty","balanced","silky-smooth","rich-indulgent","best-selling"] },
        { "name": "Jasmine Milk Tea", "tags": ["milk-tea","green-tea","jasmine","floral","delicate","creamy","vegetal-grassy","balanced","silky-smooth","honeyed"] },
        { "name": "Tie Guan Yin Milk Tea", "tags": ["milk-tea","oolong","roasted-toasty","earthy","nutty","creamy","bold","smoky","balanced","silky-smooth"] },
        { "name": "Hokkaido Milk Tea", "tags": ["milk-tea","black-tea","caramel","vanilla","sweet","creamy","rich-indulgent","silky-smooth","dessert-like","honeyed"] },
        { "name": "Matcha Oolong Milk Tea", "tags": ["milk-tea","matcha","oolong","vegetal-grassy","earthy","creamy","bittersweet","balanced","roasted-toasty","signature"] }
      ],
      "Fruit Tea": [
        { "name": "Sunright Fruit Tea", "tags": ["fruit-tea","tropical","fruity","sweet","tart","juicy","light-refreshing","icy","citrusy","signature"] },
        { "name": "Grapefruit Jasmine Tea", "tags": ["fruit-tea","green-tea","jasmine","citrusy","tart","bittersweet","floral","juicy","light-refreshing","fruity"] },
        { "name": "Winter Melon Tea", "tags": ["pure-tea","sweet","honeyed","caramel","light-refreshing","delicate","icy","vegetal-grassy","balanced","juicy"] }
      ],
      "Frosties": [
        { "name": "Mango Frostie", "tags": ["smoothie-slush","tropical","fruity","sweet","icy","juicy","creamy","light-refreshing","tart","chewy-pearls"] },
        { "name": "Chocolate Oreo Frostie", "tags": ["smoothie-slush","chocolatey","sweet","creamy","icy","dessert-like","rich-indulgent","velvety-foam","frothy","best-selling"] }
      ],
      "Cheese Foam": [
        { "name": "Tie Guan Yin Oolong Cheese", "tags": ["pure-tea","oolong","roasted-toasty","earthy","savory-sweet","salty-milk-foam","velvety-foam","creamy","bold","balanced"] },
        { "name": "Jasmine Cheese", "tags": ["pure-tea","green-tea","jasmine","floral","savory-sweet","salty-milk-foam","velvety-foam","creamy","delicate","balanced"] }
      ]
    },
    "TP Tea": {
      "Milk Tea": [
        { "name": "Pearl Milk Tea", "tags": ["milk-tea","black-tea","sweet","creamy","chewy-pearls","balanced","silky-smooth","honeyed","best-selling","signature"] },
        { "name": "Taiwan Classic Milk Tea", "tags": ["milk-tea","black-tea","sweet","creamy","chewy-pearls","balanced","silky-smooth","bold","signature","honeyed"] },
        { "name": "TGY Family Milk Tea", "tags": ["milk-tea","oolong","roasted-toasty","earthy","nutty","creamy","chewy-pearls","balanced","bold","signature"] },
        { "name": "Boba Mango Milk Tea", "tags": ["milk-tea","smoothie-slush","tropical","fruity","sweet","creamy","chewy-pearls","icy","juicy","rich-indulgent"] }
      ],
      "Brown Sugar Drinks": [
        { "name": "Brown Sugar Boba Milk Tea", "tags": ["brown-sugar-series","milk-tea","caramel","sweet","creamy","chewy-pearls","rich-indulgent","dessert-like","best-selling","signature"] },
        { "name": "Brown Sugar Milk Tea Smoothie", "tags": ["brown-sugar-series","smoothie-slush","caramel","sweet","creamy","icy","velvety-foam","chewy-pearls","dessert-like","rich-indulgent"] }
      ],
      "Cheese Cream Foam": [
        { "name": "Tie Guan Yin Cheese Cream Foam", "tags": ["pure-tea","oolong","roasted-toasty","earthy","savory-sweet","salty-milk-foam","velvety-foam","creamy","bold","signature"] },
        { "name": "Black Tea Cheese Cream Foam", "tags": ["pure-tea","black-tea","malty","bold","savory-sweet","salty-milk-foam","velvety-foam","creamy","balanced","roasted-toasty"] },
        { "name": "Mango Cheese Cream Foam", "tags": ["fruit-tea","green-tea","tropical","fruity","savory-sweet","salty-milk-foam","velvety-foam","juicy","light-refreshing","tart"] }
      ],
      "Fruit Tea": [
        { "name": "Lemon Signature Black Tea", "tags": ["fruit-tea","black-tea","citrusy","tart","fruity","juicy","light-refreshing","bold","icy","balanced"] },
        { "name": "Passion Fruit Green Tea", "tags": ["fruit-tea","green-tea","tropical","fruity","tart","sweet","juicy","light-refreshing","icy","vegetal-grassy"] },
        { "name": "Fantastic Fruit Tea", "tags": ["fruit-tea","jasmine","tropical","fruity","citrusy","sweet","juicy","light-refreshing","tart","best-selling"] }
      ],
      "Original Tea": [
        { "name": "Honey Jasmine Green Tea", "tags": ["pure-tea","green-tea","jasmine","floral","honeyed","sweet","delicate","vegetal-grassy","light-refreshing","balanced"] }
      ]
    }
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = chains;
  }
