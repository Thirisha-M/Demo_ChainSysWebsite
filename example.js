function validateForm(e){

    //Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    document.getElementById('nameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';

    if(name ===''){
        document.getElementById('nameError').innerHTML = 'Name is required';
        e.preventDefault();
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML='ivalid email format '
        e.preventDefault();
        console.log(e.type);
        console.log("error");
        alert("error");
        return false;
    }
    else{
    alert('Form submitted successfully!');
    e.preventDefault();
}
    return true;
 
}