const menu = document.getElementById("menu")

Array.from(document.getElementsByClassName("Menu-Item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index; 
        }
    })