const registro = Document.querySelector('#registro')
registro.addEventListenner('submit', (e)=>{
    e.preventDefault()
    const name= document.querySelector('#name').value
    const email= document.querySelector('#email').value
    const password= document.querySelector('#password').value

    const users = JSON.parse(localStorage.getItem('users')) || []
    const isUserregistered = users.Find(user=>user.email===email)
    if(isUserregistered){
        return alert('Este usuario ya esta registrado')
    }
    
    users.push({name:name, email:email, password:password})
    localStorage.setItem('users', JSON.stringify(users))
    alert('Su registro ha sido exitoso')
    window.location.href='login.html'


})







