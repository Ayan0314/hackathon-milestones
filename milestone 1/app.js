var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
// addEventListener matlab wait karta ha button pa click hone ka
