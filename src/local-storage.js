let pageLoadCounter = 0;

export default function() {
    console.log(`Home page loaded ${++pageLoadCounter} time(s)`);

    localStorage.test = "Holla!"

    console.log(`Your local storage says ${localStorage.getItem("test")}`);
}