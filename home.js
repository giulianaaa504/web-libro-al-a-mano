const logout = document.querySelector('logout')
logout.addEventListener('click', ()=>{
    alert('¡HASTA LA PROXIMA!')
    localStorage.removeItem('')
    window.location.href='index.html'


})