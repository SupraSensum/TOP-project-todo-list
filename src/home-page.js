import restoImage from "./dalle_serene_beach_restaurant.webp";

let pageLoadCounter = 0;

export default function() {
    const homepage = document.getElementById("content");
    homepage.innerHTML = ''; // clear that baby out first

    // create image
    const bannerImage = document.createElement("img");
    bannerImage.src = restoImage;

    // create headline
    const headline = document.createElement("h1");
    headline.textContent = "Escape to Tranquility: A Hidden Beachside Dining Haven"

    // create some text
    const someText = document.createElement("p");
    someText.textContent = "Nestled on a pristine, secluded beach, our boutique restaurant offers an intimate dining experience like no other. Surrounded by lush tropical greenery and the soothing sound of waves gently lapping at the shore, you’ll find the perfect escape from the ordinary. Savor gourmet dishes crafted from fresh, local ingredients, all while enjoying breathtaking views of the turquoise sea. Whether you're seeking a peaceful lunch under the palms or a romantic sunset dinner, our hidden gem promises an unforgettable experience in paradise.";

    // add all the shizznizz to our homepage
    homepage.appendChild(bannerImage);
    homepage.appendChild(headline);
    homepage.appendChild(someText);

    console.log(`Home page loaded ${++pageLoadCounter} time(s)`);
}