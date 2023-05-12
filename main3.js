const firebaseConfig = {
  apiKey: "AIzaSyB8_UY2OGENqIx0-_SvKGs7htl0LIGzhcs",
  authDomain: "rettiwk.firebaseapp.com",
  databaseURL: "https://rettiwk-default-rtdb.firebaseio.com",
  projectId: "rettiwk",
  storageBucket: "rettiwk.appspot.com",
  messagingSenderId: "1045632838405",
  appId: "1:1045632838405:web:403c54594fab938bbe656c"
};
firebase.initializeApp(firebaseConfig);
// crea las variables de almacenamiento local del nombre del usuario y la sala
nombre=localStorage.getItem("nombre");
guardar= localStorage.getItem("guardar");


document.getElementById("sala").innerHTML= "Bienvenido a la sala #" +guardar + "😀"; 


//creamos la función para enviar los mensajes

function boton(){

//guarda el mensaje enviado en una variable
var almacenar= document.getElementById("type").value 

//se envía a la Firebase

firebase.database().ref(guardar).push(
{
usuario: nombre, 
msj:almacenar, 
like:0
});

document.getElementById("type").value="";
}



//lectura de base de datos

function leer_datos()
{
firebase.database().ref("/"+guardar).on('value', function(carpetas)
{
  document.getElementById("mensajes").innerHTML = ""; 
  carpetas.forEach(function(raiz)
  {
    keys  = raiz.key; 
    contenido = raiz.val(); 
    
    if(keys != "contenido") 
    {

     
      key_mensaje= keys;
      datos_mensaje= contenido; 

        // separa los datos en valores individuales
       usuario = datos_mensaje['usuario'];
       msj = datos_mensaje['msj'];
       like = datos_mensaje['like'];


       //creamos las labels donde se leeran
       linea_nombre = "<h3 id='linea_nombre'> "+ usuario + " </h3>";
       linea_msj = "<h3 id='mensaje_enviado'>" + msj + "</h3>";

       boton_like ="<button class='btn btn-primary' id="+ key_mensaje +" value= "+ like +" onclick='leer_like(this.id)'>";
       linea_likes = "<h4 <span> 👍 Like: "+ like +"</span> </h4> </button>";

      fila = linea_nombre + linea_msj +boton_like + linea_likes;    
      
      //escribe el id del sitio donde se leen los mensajes en la sala

      document.getElementById("mensajes").innerHTML += fila;

    } 
  });  
}); 
}
leer_datos();


function leer_like(activador)
{

  check_boton = activador;
  likes_totales = document.getElementById(check_boton).value;


  //crea el contador de likes que aumenta de 1 en 1
  contador_likes = Number(likes_totales)+1

  
  //se guardan los likes en la Firebase
  firebase.database().ref(guardar).child(check_boton).update({
      like : contador_likes  
   });

}

function salir2() 
{
localStorage.removeItem("nombre");
localStorage.removeItem("guardar");
  window.location = "index.html";
}