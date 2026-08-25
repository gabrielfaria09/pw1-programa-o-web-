function login(){
    const user = document.getElementById("fuser").value;
    const password = document.getElementById("fpassword").value;
    const tipo = document.getElementById("tipo").value;

    if( user === "adm" && password === "123"){
        alert("Senha correta!");
    } else{
        alert("Senha incorreta!");
    }

    window.open(`https://wa.me/5519988570715?text=${user} deseja entrar como ${tipo}`, '_blank');

}