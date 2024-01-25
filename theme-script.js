const theme = document.getElementById("theme");
const themeButton = document.getElementById("theme-button");
let isDark = false;

theme.addEventListener('click', function (event){
    
    if(isDark){
        themeButton.classList.remove("moon");
        themeButton.classList.add("sun");
        isDark = false;
    } else{
        themeButton.classList.add("moon");
        themeButton.classList.remove("sun");
        isDark = true;
    }
});

