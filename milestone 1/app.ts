const toggleButton=document.getElementById("toggle-skills") as HTMLButtonElement;// import toggle-button class from html
const skills= document.getElementById("skills") as HTMLElement; // import skills section class from html

toggleButton.addEventListener('click',()=>{
    if(skills.style.display === 'none'){
        skills.style.display="block";
    }else{
        skills.style.display="none";
    }
});

// addEventListener matlab wait karta ha button pa click hone ka