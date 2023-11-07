const sobremim = document.getElementById('sobre_mim')
const classSobre = sobremim.classList

window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 500){
        classSobre.add('sobre_mim')
    }
})

