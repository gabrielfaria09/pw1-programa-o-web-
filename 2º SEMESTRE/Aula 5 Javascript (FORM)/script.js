function login(){
    const user = document.getElementById("fuser").value;
    const password = document.getElementById("fpassword").value;

    if( user === "adm" && password === "123"){
        alert("Senha correta!");
    } else{
        alert("Senha incorreta!");
    }

}


login();