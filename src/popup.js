const openPopUp = document.querySelectorAll('#openPopup')
const popUp = document.querySelectorAll('#popup')
const closePopup = document.querySelectorAll('#closePopup')

closePopup.forEach(element =>{
    element.addEventListener('click', function() {
        popUp.forEach(element =>{
            element.style.display = 'none';
        })
    });
})

for (let i = 0; i < openPopUp.length; i++){
    openPopUp[i].addEventListener('click', ()=>{
        popUp[i].style.display = 'block'
    })
}

















