let pageLoadCounter = 0;

export default function() {
    const homepage = document.getElementById("content");
    homepage.innerHTML = ''; // clear that baby out first

    // create headline
    const headline = document.createElement("h1");
    headline.textContent = "Where Nature Meets Culinary Excellence";

    // create some text
    const paraOne = document.createElement("p");
    paraOne.textContent = "At Azure Drift, we believe that the best dining experiences are those that nourish both the body and soul. Tucked away on a secluded stretch of beach, we created this intimate haven to offer a peaceful retreat where guests can indulge in the freshest flavors of the region, while surrounded by the beauty of nature. Our passion for exceptional cuisine, combined with our love for the ocean and tropical landscapes, led us to craft a space where every meal becomes a memorable experience.";
    const paraTwo = document.createElement("p");
    paraTwo.textContent = "Our menu is thoughtfully curated to showcase the finest local ingredients, blending traditional and modern culinary techniques. Whether you’re savoring a carefully prepared seafood dish or enjoying a refreshing tropical cocktail, each bite reflects our commitment to quality, sustainability, and the unique spirit of this beautiful locale. Join us at Azure Drift, and let us take you on a journey of flavors, relaxation, and unforgettable moments by the sea.";

    // add all the shizznizz to our homepage
    homepage.appendChild(headline);
    homepage.appendChild(paraOne);
    homepage.appendChild(paraTwo);

    console.log(`Aboud page loaded ${++pageLoadCounter} time(s)`);
}