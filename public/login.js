let a1=document.querySelector('#a1');
let a2=document.querySelector('#a2');
let a3=document.querySelector('#a3');

a3.addEventListener('click',async(e)=>{
    e.preventDefault();
    let email=a1.value;
    let password=a2.value;
    
    
const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if(res.ok){
    alert("login successful");
    window.location.href='home.html';
  }
  else{
    alert("invalid credentials try again or create account");
  }
  });
