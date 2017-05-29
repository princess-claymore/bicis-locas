
function validateForm(){
	/* Escribe tú código aquí */

  var nombre= document.getElementById('name').value;
  var apellido=document.getElementById('lastname').value;
  var mail= document.getElementById('input-email').value;
  var passw= document.getElementById('input-password').value;
  var menuBici= document.getElementsByClassName('form-control')[4];

  var regex = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/ ;
  var regexm=  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  /*var primera=nombre.charAt(0).toUpperCase() + nombre.slice(1);
  var primer= apellido.charAt(0).toUpperCase() +apellido.slice(1); */
    if(nombre.length==0 || nombre==null){
        alert("El campo nombre es obligatorio");
       return false;
     }
     else if (!regex.test(nombre)) {
     alert("ingresa solo letras y las primeras en mayuscula");
      return false;
     }

     if(apellido.length==0 || apellido==null){
        alert("El campo apellido es obligatorio");
       return false;
       }
      else if (!regex.test(apellido)){
      alert("ingresa el apellido en mayuscula");
       return false;
       }
      if(mail.length==0){
        alert("ingresa el correo");
      }
       else if(regexm.test(mail)==false){
        alert("ingresa en el formato requerido, con arroba");
       return false;
      }
      else if(passw.length<6){
       alert("El tamaño mínimo de la contraseña aceptado es de 6 caracteres");
       return false;
       }
        else if(passw == "password" || passw =="123456" || passw == "098754"){
        alert("Contraseña no segura");
        /*return false;*/
       }

       else if (menuBici.value == 0) { //drop down menu
 		  alert("Por favor selecciona una opción");
       menuBici.focus();
       }
       else {
        alert("datos enviados");
        return false;
        }
      }
