/*--------------------------muda tema--------------------------------*/
const html = document.querySelector('html')
const mudaTema = document.getElementById("blk__wth")
const logo = document.getElementById('logo')
const footer_icon = document.getElementById('footer__icon')
const moonSun = document.getElementById('moonSun')
const standBy = document.querySelectorAll('#standby')

mudaTema.addEventListener("click", (e)=>{
    e.preventDefault();
    if (html.getAttribute("color-mode") == "dark"){
        html.setAttribute("color-mode", "white")
        logo.setAttribute("src", "images/Math_Marca D_água preta Pequena.png")
        footer_icon.setAttribute("src", "./images/M_Logo Reduzido Pequeno.png")
        moonSun.setAttribute("src", "./images/moon.png")
        standBy.forEach(element => {
            element.setAttribute("src", "https://github.com/MedradoM/MedradoM/assets/117043744/2ce34c7f-9c3e-48d3-8944-0d1b9e29ec20")
        });
    } else {
        html.setAttribute("color-mode", "dark")
        logo.setAttribute("src", "./images/Math_Marca D_água Branca Pequena.png")
        footer_icon.setAttribute("src", "images/M_.png")
        moonSun.setAttribute("src", "./images/sun.png")
        standBy.forEach(element =>{
            element.setAttribute("src", "https://github.com/MedradoM/MedradoM/assets/117043744/86e0e567-a1b2-4e0d-986e-7397e857de24")
        })
    }
})
