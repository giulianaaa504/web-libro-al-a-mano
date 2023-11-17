const registro = document.querySelector('#Registro')
registro.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name= document.querySelector('#name').value;
    const email= document.querySelector('#email').value;
    const password= document.querySelector('#password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUseregistered = users.find(user=>user.email===email);
    if(isUseregistered){
        return alert('Este usuario ya esta registrado');
    }
    
    users.push({name:name, email:email, password:password});
    localStorage.setItem('users', JSON.stringify(users));
    alert('Su registro ha sido exitoso');
    window.location.href='login.html';


})





