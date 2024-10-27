let pageLoadCounter = 0;

export default function() {
    const homepage = document.getElementById("content");
    homepage.innerHTML = ''; // clear that baby out first

    // create headline
    const headline = document.createElement("h1");
    headline.textContent = "Azure Drift Menu: A Journey of Coastal Flavors";

    // create some text
    const description = document.createElement("p");
    description.textContent = "Our menu celebrates the vibrant, fresh flavors of the sea and the land. Each dish is inspired by our coastal surroundings, thoughtfully crafted using locally sourced ingredients, and presented with care to enhance your dining experience. Dive into our selection of seafood delicacies, tropical-inspired dishes, and handcrafted desserts, all while soaking in the tranquil beachside atmosphere.";

    // Create menu items
    const menuList = document.createElement("ul");

    const menuItems = [
        {
            name: "Grilled Lobster with Coconut-Lime Butter",
            description: "Perfectly charred lobster served with a tropical twist of coconut-lime butter, complemented by fresh, local greens."
        },
        {
            name: "Seared Sea Bass with Mango Salsa",
            description: "A light, flavorful dish featuring tender sea bass topped with a refreshing mango salsa, served with jasmine rice."
        },
        {
            name: "Tropical Ceviche",
            description: "Freshly caught fish marinated in citrus juices, mixed with avocado, cilantro, and a burst of tropical fruits."
        },
        {
            name: "Crispy Coconut Shrimp",
            description: "Succulent shrimp coated in a crispy coconut crust, paired with a sweet and tangy pineapple dipping sauce."
        },
        {
            name: "Island-Style Grilled Chicken",
            description: "Grilled chicken marinated in a blend of island spices, served with roasted plantains and coconut rice."
        },
        {
            name: "Pineapple and Chili-Glazed Ribs",
            description: "Slow-cooked ribs with a sticky pineapple-chili glaze, served with crispy yucca fries."
        },
        {
            name: "Tropical Fruit Sorbet",
            description: "A refreshing end to your meal, with flavors like passionfruit, guava, and pineapple, crafted from the freshest island fruits."
        },
        {
            name: "Key Lime Cheesecake",
            description: "Creamy cheesecake infused with zesty key lime, on a buttery graham cracker crust, topped with whipped cream."
        },
        {
            name: "Coconut Watermelon Cooler",
            description: "A refreshing, chilled drink made with coconut water, watermelon, and a splash of lime, perfect for cooling off by the beach."
        },
        {
            name: "Sunset Margarita",
            description: "A tropical blend of fresh mango, lime, and premium tequila, served with a chili-salted rim to add a touch of heat."
        }
    ];

    // Append menu items to the menu list
    menuItems.forEach(item => {
        const menuItem = document.createElement("li");
        
        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        menuItem.appendChild(itemName);
        menuItem.appendChild(itemDescription);
        menuList.appendChild(menuItem);
    });

    // Add all elements to the homepage
    homepage.appendChild(headline);
    homepage.appendChild(description);
    homepage.appendChild(menuList);

    console.log(`Menu page loaded ${++pageLoadCounter} time(s)`);
}
