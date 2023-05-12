//configura tu FireBase y luego activala usando el siguiente código

  firebase.initializeApp(firebaseConfig);
  

  //toma el nombre del almacenamiento local y ponlo en una variable
 
  
  //muestra en pantalla un saludo de bienvenida que reconozca el nombre del usuario

  
  
  
  
  //CREAMOS LA OPCION DE AGREGAR UNA SALA
  
     function _______()
  {

    //guarda el nombre de la sala en una variable
   
  
    //almacena los datos en la firebase
    
  
    firebase.database().ref("/").child(________).update(
      {
      contenido : "informacion de la sala"
      });
  
      localStorage.setItem("_____", _______);
      
       window.location = "index3.html";
  }
  
  
  //hacemos lectura de la FireBase
  
  function leer_firebase()
  {  
      firebase.database().ref("/").on('value', function(carpetas)
        { 
            document.getElementById("salida").innerHTML = "";
  
            //ejecuta la función una vez por cada elemento de la lista
            carpetas.forEach(function(raiz) 
             { 
                salas  = raiz.key;
                fila = "<div  id="+salas+" onclick='ir_a_sala(this.id)' >"+ "#" + salas +"</div>";
        
                document.getElementById("salida").innerHTML += fila + "<hr>"
            });
        });
  }
  

  leer_firebase();
  
    
  function ir_a_sala(______)
  {
    localStorage.setItem("______", _____);
    window.location = "index3.html";
  }
  

    
  function salir() 
  {
  localStorage.removeItem("___________");
  localStorage.removeItem("______________");
  window.location = "index.html";
  }
  