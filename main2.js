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
nombre= localStorage.getItem("nombre")
document.getElementById("hola").innerHTML="Bienvenid@ "+nombre
//CREAMOS LA OPCION DE AGREGAR UNA SALA
  
function salas()
{

  //guarda el nombre de la sala en una variable
 guardar= document.getElementById("input2").value 

  //almacena los datos en la firebase
  

  firebase.database().ref("/").child(guardar).update(
    {
    contenido : "informacion de la sala"
    });

    localStorage.setItem("guardar", guardar);
    
     window.location = "index3.html";
}


//hacemos lectura de la FireBase

function leer_firebase()
{  
    firebase.database().ref("/").on('value', function(carpetas)
      { 
          document.getElementById("div").innerHTML = "";

          //ejecuta la función una vez por cada elemento de la lista
          carpetas.forEach(function(raiz) 
           { 
              salas  = raiz.key;
              fila = "<div  id="+salas+" onclick='ir_a_sala(this.id)' >"+ "#" + salas +"</div>";
      
              document.getElementById("div").innerHTML += fila + "<hr>"
          });
      });
}


leer_firebase();

  
function ir_a_sala(guardar)
{
  localStorage.setItem("guardar", guardar);
  window.location = "index3.html";
}


  
function salir2() 
{
localStorage.removeItem("guardar");
localStorage.removeItem("nombre");
window.location = "index.html";
}
