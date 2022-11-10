const isOpen = () => {
    
    let openMenu = document.getElementById('showMenu')
    let icon = document.getElementById('icon-close')
    if (openMenu.style.visibility === "hidden") {
        openMenu.style.visibility = "visible";
        openMenu.style.height = "180px"
        openMenu.style.transition = "all 0.3s"
        icon.classList.remove("fa-solid", "fa-bars")
        icon.classList.add("fa-solid", "fa-xmark")
    
      }
      else {
        openMenu.style.visibility = "hidden"
        openMenu.style.height = "0px"
        icon.classList.remove("fa-solid", "fa-xmark")
        icon.classList.add("fa-solid", "fa-bars")
        openMenu.style.transition = "all 0.3s"
    
      }
}