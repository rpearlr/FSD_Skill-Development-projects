const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_title: "Pasta Puttanesca",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 15,
    recipe_serves: 4,
    recipe_summary:
      "Cook up this classic sauce in one pan, then toss with spaghetti for a simple midweek meal. It's budget-friendly too, making it a great meal for the family.",
    recipe_ingredients: [
      "3 tbsp olive oil",
      "½ small bunch of parsley, finely chopped",
      "1 onion, finely chopped",
      "2 large garlic cloves, crushed",
      "½ tsp chilli flakes (optional)",
      "400g can chopped tomatoes",
      "5 anchovy fillets, finely chopped",
      "120g pitted black olives",
      "2 tbsp capers, drained",
      "300g dried spaghetti",
    ],
    recipe_method: [
      "Heat the oil in a non-stick pan over a medium-low heat. Add the onion along with a generous pinch of salt and fry for 10 mins, or until soft. Add the garlic and chilli, if using, and cook for a further minute.",
      "Stir the tomatoes, anchovies, olives and capers into the onion, bring to a gentle simmer and cook, uncovered, for 15 mins. Season to taste.",
      "Meanwhile, bring a large pan of salted water to the boil. Cook the spaghetti following pack instructions, then drain and toss with the sauce and parsley.",
    ],
    recipe_image: "uploads/puttanesca.png",
    recipe_likes: 2,
    recipe_spice: "Spicy",
    recipe_fish: "Fish",
    recipe_ingredients_tags: ["Pasta", "Spicy", "Tasty"],
    recipe_cuisine: "Italian",
    recipe_jam:
      "https://www.youtube.com/watch?v=OnFlx2Lnr9Q&ab_channel=NMCatalogue",
    user_id: 1,
  },
  {
    recipe_title: "Fish Tandoori",
    recipe_cooking_time_hours: 2,
    recipe_cooking_time_minutes: 0,
    recipe_serves: 2,
    recipe_summary:
      "Planning to serve Tandoori fish at your next house party? Try this easy Tandoori fish recipe with step by step instructions!",
    recipe_ingredients: [
      "300 gm salmon fish",
      "8 cloves garlic",
      "1 tablespoon grated lime zest",
      "1/2 teaspoon cumin powder",
      "salt as required",
      "3 tablespoon gram flour (besan)",
      "2 handful coriander leaves",
      "2 tablespoon lime juice",
      "1 tablespoon red chilli powder",
      "1/2 tablespoon garam masala powder",
      "1 cup vegetable oil",
      "120 gm hung curd",
    ],
    recipe_method: [
      "Prepare a special ginger-garlic paste: To begin with wash and clean the fish. Next, make a fine paste with half of the vegetable oil, garlic, coriander, ginger, red chilli powder, cumin powder, garam masala, lime juice and zest, and salt.",
      "Make gram flour paste: Heat the oil in a pan and add the gram flour, stir to make a paste, and cook for about a minute till fragrant and lightly coloured.",
      "Add spice paste, yoghurt & marination ingredients: Add the mixture to the spice paste and combine with the yoghurt. Mix well all the ingredients for the marinade.",
      "Marinate the fish cubes & preheat the oven: Gently rub the marinade over the fish pieces and marinate for an hour. Preheat the oven to 200 degree Celsius and spread out the marinated fish in a baking dish.",
      "Bake for 10-15 minutes: Bake the tandoori fish for 10-15 minutes on the top rack turning the fish pieces once. Baste the fish pieces once or twice during cooking with butter. Serve hot with chutney or sauce.",
      "Tips: Squeeze lemon juice over your fish tikkas for best taste. Let the fish marinate for 2-3 hours or even overnight if you have the time. You can use any other fish that you prefer for this recipe.",
    ],
    recipe_image: "uploads/Tandoori-Fish.jpg",
    recipe_likes: 3,
    recipe_spice: "Spicy",
    recipe_fish: "Fish",
    recipe_ingredients_tags: ["Seafood", "Main", "Pescatarian", "Healthy"],
    recipe_cuisine: "Indian",
    recipe_jam:
      "https://www.youtube.com/watch?v=2v2CNGiK7sQ&ab_channel=HilarySummers-Topic",
    user_id: 2,
  },
  {
    recipe_title: "Har Gau Dimsum",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 20,
    recipe_serves: 3,
    recipe_summary:
      "Har gau, also known as har gow, are a type of Chinese dumpling traditionally served as dim sum.",
    recipe_ingredients: [
      "600g of potato flour",
      "600g of wheat starch flour",
      "1l hot water",
      "450g of prawns, peeled",
      "1/2 tsp chicken stock cube",
      "1/2 tsp potato flour",
      "1 pinch of ground white pepper",
      "1/2 tsp salt",
      "1 tsp sugar",
      "20ml of vegetable oil",
    ],
    recipe_method: [
      "Begin by preparing the prawns for the dumpling filling. Fill a bowl with cold water and put the prawns in to soak, leaving for 30 minutes to firm up.",
      "Drain the prawns, then transfer them to a blender and blend until smooth. Add the stock cube, flour, pepper, salt, sugar and oil to the prawn paste, stir to combine and reserve in the freezer for 2 hours",
      "To make the dough, sieve both the wheat flour and potato flour into a large mixing bowl. Gradually add in the hot water, stirring the mixture with a palette knife. Once all the water has been added use your hands to lightly knead the mixture until you have a smooth ball of dough.",
      "Divide the dough into individual balls, taking into consideration that there will be more dough than is needed for the filling. Freeze any excess dough and, on a lightly floured surface, roll out the balls into 6mm thick discs.",
      "To assemble the har gau place a dough disc in the palm of your hand and spoon one level tablespoon of the har gau filling into the centre of the round. Using your index fingers and thumbs, mould the dough upwards around the filling and pinch it together into a bowl shape",
      "Place the har gau in a steamer basket and steam for 3–6 minutes. Remove from the steamer and serve immediately",
    ],
    recipe_image: "uploads/dimsum.jpg",
    recipe_likes: 2,
    recipe_spice: "Spicy",
    recipe_shellfish: "Shellfish",
    recipe_ingredients_tags: ["Seafood", "Tasty", "Hot", "Pork"],
    recipe_cuisine: "Chinese",
    recipe_jam:
      "https://www.youtube.com/watch?v=rGh97zsBfWk&ab_channel=stelioscockey",

    user_id: 3,
  },
  {
    recipe_title: "Singapore noodles",
    recipe_cooking_time_hours: 0,
    recipe_cooking_time_minutes: 45,
    recipe_serves: 4,
    recipe_summary:
      "A low-fat, low-calorie stir-fry of pork and prawns, flavoured with teriyaki, madras and five-spice powder.",
    recipe_ingredients: [
      "3 tbsp teriyaki sauce",
      "½ tsp Chinese five-spice powder",
      "2 tsp medium Madras curry powder",
      "300g/11oz pork tenderloin, trimmed of any fat",
      "140g medium egg noodle",
      "1 tbsp sunflower oil",
      "2 x 300g packs fresh mixed stir-fry vegetables",
      "100g cooked prawn, thawed if frozen",
    ],
    recipe_method: [
      "Mix the teriyaki sauce, five-spice and curry powders. Add half to the pork, turning to coat, and leave to marinate for 15 mins.",
      "Heat oven to 200C/180C fan/ gas 6. Remove pork from the marinade and put on a small baking tray lined with foil. Roast for 15-20 mins.",
      "Meanwhile, cook the noodles following pack instructions, but reduce the cooking time by 1 min. Refresh in cold water and drain very well.",
      "Transfer the pork to a chopping board and rest for 5 mins. Set a large non-stick frying pan or wok over a medium-high heat. Add the oil and stir-fry the veg for 3-4 mins. Cut the pork in half lengthways, then thinly slice. Tip into the pan, with the prawns, noodles and remaining marinade. Toss together for 2-3 mins until hot.",
    ],
    recipe_image: "uploads/noodles.jpg",
    recipe_likes: 2,
    recipe_spice: "Spicy",
    recipe_shellfish: "Shellfish",
    recipe_ingredients_tags: ["Seafood", "Noodles", "Hot", "Pork"],
    recipe_cuisine: "Asian",
    user_id: 4,
  },
  {
    recipe_title: "Classic Butter Chicken",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 35,
    recipe_serves: 4,
    recipe_summary:
      "Swap your usual takeaway for homemade butter chicken. The dish is made in two parts, combining tandoori chicken with a rich, buttery sauce.",
    recipe_ingredients: [
      "MAIN INGREDIENTS",
      "3 tbsp lemon juice",
      "2-3 tbsp kashmiri chili powder or paprika",
      "4 skinless chicken breasts or 8 thigh fillets, chopped into 5cm cubes",
      "3 tbsp melted butter or ghee, for basting the skewers",
      "MARINADE",
      "200ml plain yogurt",
      "1 tbsp crushed garlic",
      "1 tbsp finely grated ginger",
      "2 tbsp ground coriander",
      "2 tbsp ground cumin",
      "2 tsp amchoor powder (dried mango powder)",
      "1 tbsp dried fenugreek leaves, crushed",
      "1 tbsp dried mint leaves",
      "½ tsp black salt (optional, see below)",
      "½ tsp plain salt (use 1 tsp if you do not have black salt)",
      "FOR THE SAUCE",
      "3 tbsp vegetable oil",
      "1 tsp cumin seeds",
      "4-8 hot green chillies, sliced",
      "90g butter or ghee",
      "2 medium onions, finely chopped",
      "4 green cardamom pods, cracked",
      "½ tbsp crushed garlic",
      "½ tbsp grated ginger",
      "1 tsp ground turmeric",
      "2 tsp dried fenugreek leaves, crushed",
      "500ml passata, diluted with 150ml water",
      "2 tsp garam masala",
      "100ml single cream",
      "large pinch of coriander leaves, to garnish",
    ],
    recipe_method: [
      "Rub the lemon juice and chilli powder or paprika into the chicken with a pinch of salt, then chill for 1 hr. Mix all the marinade ingredients together in a bowl, taste for seasoning, then add the chilled chicken. Mix well and chill for another 2 hrs.",
      "Thread the marinated chicken pieces onto metal skewers, reserving any leftover marinade. Grill over a hot barbecue for 5 mins, turning occasionally and basting with the melted butter or ghee. Alternatively, cook under a hot grill for 8-10 mins, turning occasionally. Don't worry if the chicken is a little under cooked, as it will finish cooking in the sauce. Remove the skewers to a board.",
      "To make the sauce, heat 2 tbsp vegetable oil in a wok or large frying pan and drop in a few cumin seeds. When they start sizzling, tip in the rest of the seeds. Swirl the pan, reduce the heat and add the green chillies. Stir once or twice until the skins of the chillies have blistered, then add the butter or ghee. Turn the heat up to high and continue to cook until all the butter or ghee has melted. Tip in the onions and fry for 10 mins until the onions are light brown and soft. If you prefer a smooth sauce, tip the mixture into a blender and blitz until smooth. Alternatively, scrape into a bowl and set aside.",
      "Wipe the pan clean with kitchen paper and heat the remaining oil. Drop in the crushed cardamom pods. When they have swelled and lightened in colour, reduce the heat, add the garlic and ginger and fry for 30 seconds, stirring continuously until you can no longer smell raw garlic and ginger. Return the cooked onion mixture to the pan and mix well. Add the turmeric and half the fenugreek leaves. Season with salt. Taste and adjust the seasoning if needed – if you like, you can add some chilli powder. Pour in the diluted passata, mix well and bring to the boil. Reduce the heat to a simmer and cook, covered and stirring occasionally, for around 20 mins. Oil will eventually rise to the surface when the sauce is cooked.",
      "Remove the chicken pieces from the skewers and chop into bite-sized pieces. Add these to the sauce along with any resting juices. Tip about 125ml warm water into the bowl with the reserved marinade, swirl to loosen, then stir into the sauce. Bring the sauce to the boil and reduce the heat to a simmer. Sprinkle over with garam masala and continue to cook for 3-4 minutes, or until chicken is cooked through. If you like, add a splash of boiling water to loosen the sauce, then taste for seasoning. Pour in half the cream and mix well.",
      "Transfer the butter chicken to a serving bowl, drizzle over the remaining cream, sprinkle with the remaining fenugreek leaves and garnish with the fresh coriander leaves.",
    ],
    recipe_image: "uploads/chicken-curry.jpeg",
    recipe_likes: 4,
    recipe_spice: "Spicy",
    recipe_ingredients_tags: ["Chicken", "Tasty", "Main", "Curry"],
    recipe_cuisine: "Indian",
    recipe_jam:
      "https://www.youtube.com/watch?v=IBmj7_TiLkM&ab_channel=Monkey-Topic",
    user_id: 5,
  },
  {
    recipe_title: "Mutton Biriyani",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 20,
    recipe_serves: 4,
    recipe_summary:
      "Biryani is a dish that nobody can ever resist. Serve along with a spicy salan or refreshing raita.",
    recipe_ingredients: [
      "FOR THE RICE",
      "1 Star anise",
      "500 gms basmati rice, blanched",
      "2 Bay leaves",
      "2 Black cardamom",
      "2 tsp black cumin seeds",
      "6 Black peppercorn",
      "6 Green cardamom",
      "2 Cinnamon sticks",
      "6 Cloves",
      "1 tsp fennel",
      "1/4 Jaiphal",
      "1 Javitri",
      "3 tsp Salt",
      "MARINADE",
      "1 kg mutton (cut in 2 inches pieces, preferably front leg part and avoid shoulder cut)",
      "1 tbsp garam masala",
      "1 tbsp garlic paste",
      "1 tbsp ginger paste",
      "3 tbsp raw papaya paste",
      "4 tbsp hung curd",
      "1 Lemon (juiced)",
      "Coriander powder",
      "Cumin powder",
      "1 tbsp red chilli powder",
      "1 tsp salt",
      "OTHER INGREDIENTS",
      "4 onions, sliced",
      "2 tomatoes, chopped",
      "1/4 cup milk (warm)",
      "Ghee",
      "Saffron strands",
      "Oil",
      "Rose water",
      "Kewra essence",
      "4 green chillies",
    ],
    recipe_method: [
      "Marinate The Mutton: To the mutton add the beaten curd, ginger-garlic paste, raw papaya paste, chilli powder, salt, lemon juice, garam masala. Allow the mutton to marinate for 3 hours.",
      "Prepare Fried Onions Or Barista: Slice 2 onions very thinly. Separate the slices. In a pan or kadai add oil and fry the onion slices till nicely brown. Take care not to burn them. Fry in small batches. Do not put all the slices at a time, that will lead to lumpy messy onions. Make sure all the onion slices frying are dipped in oil, if needed add more oil. Keep stirring continuously but gently for an even brown color. Take the fried onions out with a slotted spoon or ladle.6.Keep them on a paper-towel lined plate. This crispy brown fried onion slices are called Barista.",
      "Cook The Mutton: Heat ghee in a thick-bottomed pan. Add remaining sliced onions and green chillies. Cook, stirring continuously, till onions are light golden brown.3.Add ginger paste and garlic paste and mix well. Add marinated mutton and cook on high heat for seven to eight minutes.5.Add coriander powder, cumin powder and red chilli powder. Mix thoroughly. Stir in three cups of water, bring it to a boil, reduce heat and cook covered till mutton is almost cooked. Add tomatoes, salt, garam masala powder and fresh coriander leaves. Cook for 15 minutes on medium heat, stirring occasionally. The ghee would be separated from the spices and there should not be any watery gravy to the meat.",
      "Prepare The Rice: Use only good quality long grain Basmati rice. Soak the rice for 20 minutes in water. Wash well till the water runs clear. Drain all the water. In a small piece of cloth take cardamom, cinnamon, cloves, javitri, jaiphal, black peppercorn, shahi jeera, star anise and tie a knot to make a bag (potli). Bring 750 ml water to boil, add rice, bay leaf, salt and potli, cover and cook till rice is done 1/3rd. Drain the water & remove the whole masala potli.",
      "Prepare The Saffron Milk: Take 1/4th cup warm milk in a cup and dissolve saffron strands in the milk. Cover and wait for 20 minutes. Add rose water and kewra essence in the milk. Mix well and cover. Keep aside.",
      "Layer The Biryani: Take a large heavy bottom pan with tight fitting lid. Add 2tbsp ghee to the pan. Melt the ghee on low heat. Turn and rotate the pan carefully so the ghee can coat the bottom and sides of the pan. Switch off the heat.3.Add a layer of cooked rice, then cooked meat pieces, sprinkle saffron water, add fried onion slices and ghee. Again add a layer of rice, then meat...go on like this till you are done. Top and bottom layer will be of rice. Cover with chopped pudina and coriander, fried onion and slit green chillies and juice of half a lemon. Put the lid on. Seal the pan with flour dough or aluminium foil, then put the lid. Keep the heat to lowest. And cook the Biryani in this 'Dum' process for 40 minutes. Make sure your pan is heavy-bottomed or the rice will burn. Or you can place a flat tawa then keep the pan on that tawa. After 40 minutes switch off the heat and let the biryani stand for another 10 minutes. Transfer to a serving bowl. Serve with raita and salad.",
    ],
    recipe_image: "uploads/mutton_biriyani.jpg",
    recipe_likes: 3,
    recipe_spice: "Spicy",
    recipe_ingredients_tags: ["Curry", "Tasty", "Main", "Lamb"],
    recipe_cuisine: "Indian",
    user_id: 6,
  },
  {
    recipe_title: "Mix & Match Steak",
    recipe_cooking_time_hours: 0,
    recipe_cooking_time_minutes: 15,
    recipe_serves: 1,
    recipe_summary:
      "My favourite cuts of beef, how to prepare and cook for the perfect steak dinner.",
    recipe_ingredients: [
      "1 steak",
      "Oil",
      "1 whole garlic glove",
      "Herb sprig",
      "Butter - if fillet or rib-eye steak",
    ],
    recipe_method: [
      "Choosing Your Steak: Rib-eye: The chef’s favourite. Allow 200-250g per head to allow for trimming. This cut used to be quite cheap, but is now creeping up in price. It has an open-fibre texture and a marbling of creamy fat. Cook with the surrounding fat still attached, then remove after cooking, if you prefer. The fat adds flavour as well as basting the meat during cooking. Fillet: The most expensive cut. Allow 100-125g per head. It is very lean and, because it has short fibres, very tender. Ask for a piece cut from the middle of the fillet, not the end. Also, ensure that the butcher removes the sinewy chain that runs down the side. I like to cook my steaks split in half lengthways, not the usual round medallion shape. T-bone: Generally 350-400g each, including bone. It has a good marbling of fat with a layer of creamy fat on one side – this should be left on for cooking, then removed if you like. You get about 200-250g of meat, with a sirloin on one side of the bone and a fillet on the other. You also get some marrow in the bone which can be spread on the cooked meat.",
      "To cook your steaks, heat a frying pan – to a moderate heat for fillet, hot for T-bone or very hot for rib-eye. Add a swirl of oil, with a whole garlic clove and a herb sprig. Season the steaks with salt and pepper and cook for 1½-2½ mins on each side. For fillet steak, cook the rounded edges too, turning to seal them well.",
      "If you’re cooking fillet or rib-eye steaks, add a knob of butter to the pan, allow to foam a little and baste the steaks. T-bone steak has plenty of fat, so simply spoon it over the meat as it renders down. Remove steaks to a plate and allow to rest for at least 5 mins. Trim off any unwanted fat.",
      "Slice fillet or rib-eye steak along the grain, then arrange on a plate with your chosen sauce and side dish. My personal preferences are for rib-eye with mushrooms and the shallot & red wine sauce; fillet steak with oven chips and bois boudrin; and T-bone with wilted spinach and mushroom sauce.",
    ],
    recipe_image: "uploads/mixmatch-steak.jpg",
    recipe_likes: 1,
    recipe_ingredients_tags: ["Steak", "Beef", "Main"],
    recipe_cuisine: "American",
    recipe_jam:
      "https://open.spotify.com/track/240PbILl6Wb21Anv60rMaI?si=76dbe5808b9046c3",
    user_id: 8,
  },
  {
    recipe_title: "Chocolate Cake",
    recipe_cooking_time_hours: 2,
    recipe_cooking_time_minutes: 30,
    recipe_serves: 8,
    recipe_summary:
      "This is, for me, the quintessential chocolate cake: melting, luscious and mood-enhancingly good. ",
    recipe_ingredients: [
      "200 grams plain flour",
      "200 grams caster sugar",
      "1 teaspoon baking powder",
      "½ teaspoon bicarbonate of soda",
      "40 grams best-quality cocoa powder",
      "175 grams soft unsalted butter",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "75 grams unsalted butter",
      "175 grams best quality dark chocolate (broken into small pieces)",
      "300 grams icing sugar",
      "1 tablespoon golden syrup",
      "125 millilitres sour cream",
      "1 teaspoon vanilla extract",
      "sugar flowers (optional)",
    ],
    recipe_method: [
      "Take everything out of the fridge so that all the ingredients can come to room temperature.",
      "Preheat the oven to gas mark 4/180°C/160°C Fan/350ºF and line and butter two 20cm / 8 inch sandwich tins with removable bases.",
      "If you are cooking fillet or rib-eye steaks, add a knob of butter to the pan, allow to foam a little and baste the steaks. T-bone steak has plenty of fat, so simply spoon it over the meat as it renders down. Remove steaks to a plate and allow to rest for at least 5 mins. Trim off any unwanted fat.",
      "Divide this batter, using a rubber spatula to help you scrape and spread, into the prepared tins and bake until a cake tester, or a thin skewer, comes out clean, which should be about 35 minutes, but it is wise to start checking at 25. Also, it might make sense to switch the two cakes around in the oven halfway through cooking time.",
      "Remove the cakes, in their tins, to a wire rack and let cool for 10 minutes before turning out of their tins. Don't worry about any cracks as they will easily be covered by the icing later.",
      "To make this icing, melt the butter and chocolate in a good-sized bowl either in the microwave or suspended over a pan of simmering water. Go slowly either way: you don't want any burning or seizing.",
      "While the chocolate and butter are cooling a little, sieve the icing sugar into another bowl. Or, easier still, put the icing sugar into the food processor and blitz. This is by far and away the least tedious way of removing lumps.",
      "Add the golden syrup to the cooled chocolate mixture, followed by the sour cream and vanilla and then when all this is combined whisk in the sieved icing sugar. Or just pour this mixture down the funnel of the food processor on to the icing sugar, with the motor running.",
      "When you've done, you may need to add a little boiling water - say a teaspoon or so - or indeed some more icing sugar: it depends on whether you need the icing to be runnier or thicker; or indeed it may be right as it is. It should be liquid enough to coat easily, but thick enough not to drip off.",
      "Choose your cake stand or plate and cut out four strips of baking parchment to form a square outline on it (this stops the icing running on to the plate). Then sit one of the cakes, uppermost (ie slightly domed) side down.",
      "Spoon about a third of the icing on to the centre of the cake half and spread with a knife or spatula until you cover the top of it evenly. Sit the other cake on top, normal way up, pressing gently to sandwich the two together.",
      "Spoon another third of the icing on to the top of the cake and spread it in a swirly, textured way (though you can go for a smooth finish if you prefer, and have the patience). Spread the sides of the cake with the remaining icing and leave a few minutes till set, then carefully pull away the paper strips.",
      "I love to dot the top of this with sugar pansies - and you must admit, they do look enchanting - but there really is no need to make a shopping expedition out of it. Anything, or indeed nothing, will do.",
    ],
    recipe_image: "uploads/chocolate-cake.jpg",
    recipe_likes: 5,
    recipe_ingredients_tags: ["Dessert", "Baked", "Sweet", "Chocolate"],
    recipe_cuisine: "English",
    user_id: 7,
    recipe_jam:
      "https://open.spotify.com/track/240PbILl6Wb21Anv60rMaI?si=76dbe5808b9046c3",
  },
  {
    recipe_title: "Veggie Tacos",
    recipe_cooking_time_hours: 1,
    recipe_cooking_time_minutes: 0,
    recipe_serves: 8,
    recipe_summary:
      "Quick, easy and super tasty tacos filled to the brim with fresh vegetables and some spice!",
    recipe_ingredients: [
      "350g of Cauliflower",
      "435g of chickpeas",
      "1 Lime",
      "1 Tsp of honey",
      "30mls Olive Oil",
      "5 Chillies",
      "2 tsp Paprika",
      "3 Cloves of garlic",
      "1 Advocado", 
      "Salt and pepper to taste"
    ],
    recipe_method: [
     "Combine all of the Slaw ingredients in a non-metal bowl and set aside. Stir every once in a while.",
     "Preheat oven to 400 degrees F (204 C). Toss together all Cauliflower Filling ingredients. Lay on a parchment-lined baking sheet and bake for 30 minutes, or until slightly browned and crisp.",
     "Meanwhile, combine all Sauce ingredients in a food processor until smooth.",
     "Spoon filling evenly onto 8 tortillas. Top with a heaping spoonful of slaw and avocado sauce. Serve immediately or store separately until ready to eat."
    ],
    recipe_image: "uploads/veggie-tacos.jpg",
    recipe_likes: 10,
    recipe_spice: "Spicy",
    recipe_veg: "Veg",
    recipe_ingredients_tags: ["Spicy", "Vegetarian", "Healthy",],
    recipe_cuisine: "Mexican",
    user_id: 2,
  },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;