const nav = document.querySelector(".cab-nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event){
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    handleClickOutside(menu, () => {
        nav.classList.remove("active");
        setAria();
    });
    setAria();
}

function handleClickOutside(targetElement, callback){
    const html = document.documentElement;
    function handleHTMLClick(event){
        if (!targetElement.contains(event.target)){
            targetElement.removeAttribute("data-target");
            html.removeEventListener("click", handleHTMLClick);
            html.removeEventListener("touchstart", handleHTMLClick);
            callback()
        }
    }
    if (!targetElement.hasAttribute("data-target")){
        html.addEventListener("click", handleHTMLClick);
        html.addEventListener("touchstart", handleHTMLClick);
        targetElement.setAttribute("data-target", "")
    }
}

function setAria(){
    const isActive = nav.classList.contains("active");
    btnMenu.setAttribute("aria-expanded", isActive);
    if (isActive) {
        btnMenu.setAttribute("aria-label", "Fechar Menu");
    } else {
        btnMenu.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

function ocultarElemento() {
    const larguraTela = window.innerWidth;
    const subTitle = document.querySelector('#subTitle-home-page')
    const footer = document.querySelector('#foot-nav')
    
  
    if (subTitle && search && iphone && footer) { 
      if (larguraTela <= 768) {
        subTitle.style.display = 'none';
        footer.style.display = 'none'
      } else {
        subTitle.style.display = 'block';
        footer.style.display = 'block'
      }
    }
  }

window.addEventListener('load', ocultarElemento);
window.addEventListener('resize', ocultarElemento);


