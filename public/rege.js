let a1=document.querySelector('#a1');
let a2=document.querySelector('#a2');
let a3=document.querySelector('#a3');
let a4=document.querySelector('#a4');

a4.addEventListener('click',async(e)=>{
    e.preventDefault()
    let formdata={
        name:a1.value,
        email:a2.value, 
        password:a3.value
    };

    const res= await fetch('/register',{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata),
    });  

    if(res.ok){
        alert('regestration successful');
        window.location.href="login.html";
    }

})
