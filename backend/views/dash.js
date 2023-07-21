
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");
 
menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})


//logout modal features
//select all the selectors needed
const logout=document.querySelector('.logout')
const modal=document.querySelector('.modal-case')
const yesBtn=document.querySelector('.yes-btn')
const noBtn=document.querySelector('.no-btn')
//when  logout btn is clicked show class 'show' and modal will open.
logout.addEventListener('click',(event)=>{
    console.log(event)
    modal.classList.toggle('show')    
})
yesBtn.addEventListener('click',()=>{
    console.log('You are logged out.')
//redirect to  the appropriate page.
})
noBtn.addEventListener('click',()=>{
    modal.classList.remove('show')
})

