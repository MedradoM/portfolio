const header = document.getElementById('header')
const headerClass = header.classList

window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 700){
        if(!headerClass.contains('headerStyle')){
            headerClass.add('headerStyle')
        }
    } else {
        if(headerClass.contains('headerStyle')){
            headerClass.remove('headerStyle')
        }
    }
})