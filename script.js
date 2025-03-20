function switchToDark() {
    document.getElementById("theme").href = "night.css";
    document.getElementById("nightday").onclick = switchToLight;
}

function switchToLight() {
    // Switch the stylesheet to the day ver
    document.getElementById("theme").href = "day.css";
    // Switch the function to the darkmode function so we can get back to dark mode
    document.getElementById("nightday").onclick = switchToDark;
}