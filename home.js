
let btnhamburguesa = document.getElementById("btn-hamburguesa");
let menuNavegacion = document.getElementById("menu-navegacion");
btnhamburguesa.addEventListener('click', function(){
    menuNavegacion.classList.toggle("viewMenu");
});

$(".angle-view-sub-menu").click(function(){
  $(this).siblings("ul").toggle();
})



const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href ='index.html'
}

const logout = document.querySelector('#logout')
logout.addEventListener('click', ()=>{
    alert('¡HASTA LA PROXIMA!')
    localStorage.removeItem('login_success')
    window.location.href='index.html'


})

