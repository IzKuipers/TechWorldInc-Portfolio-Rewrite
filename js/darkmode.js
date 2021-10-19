let forcedDarkmodePath = "./css/darkMode-forced.css";

// Set the darkmode according to the "dark-mode" localStorage key
function checkDarkModePreference() {
    let localStorageItem = localStorage.getItem("dark-mode");
    let darkModeImport = document.getElementById("darkModeImport");
    let darkModeSwitch = document.getElementById("darkModeSwitch");

    darkModeImport.href = (localStorageItem == "true") ? forcedDarkmodePath : "";
    darkModeSwitch.checked = !!(localStorageItem == "true");
}

// Set the darkmode according to the position of the darkmode switch 
function toggleDarkMode() {
    let darkModeSwitch = document.getElementById("darkModeSwitch");

    localStorage.setItem("dark-mode", darkModeSwitch.checked ? "true" : "false");

    checkDarkModePreference();
}

checkDarkModePreference();