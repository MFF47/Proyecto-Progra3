$(document).ready(function() {
// on ready
});


async function registrarUsuario(){
    let datos = {};
    datos.nombre =document.getElementById('txtNombre').value;
    datos.apellidos =document.getElementById('txtApellidos').value;
    datos.email =document.getElementById('txtEmail').value;
    datos.password =document.getElementById('txtPassword').value;

    let repetirPassword =  document.getElementById('txtRepetirPasword').value;

    if(repetirPassword !== datos.password){
        alert('La contraseña es diferente');
        return;
    }

    const request = await fetch('api/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    });
    alert ("Cuenta creada exitosamente!");
    window.location.href = 'login.html'
}
