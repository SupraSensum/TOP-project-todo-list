let pageLoadCounter = 0;
let useLocalStorage = false;
let liveStorage = {};

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

function verifyLocalStorageFunctionality() {
    localStorage.test = "If you're seeing this, local storage is working!";
    console.log(localStorage.test);
    // alert("Removing local storage test JSON");
    localStorage.removeItem("test");
    console.log("test JSON removed");
}

export default function() {
    console.log(`Home page loaded ${++pageLoadCounter} time(s)`);

    if (storageAvailable("localStorage")) {
        console.info("✅ Local storage is available and functional.");
        verifyLocalStorageFunctionality();
        useLocalStorage = true;
    } else {
        console.warn("⚠️ Local storage is not functional. This could be due to browser settings, storage limits being exceeded, or other restrictions.");
    }

    function holla() { console.log("WORKING") }
}
