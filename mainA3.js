//enlaza la FireBase y activala nuevamente
    firebase.initializeApp(firebaseConfig);
  
  
 // crea las variables de almacenamiento local del nombre del usuario y la sala
    ___________=localStorage.getItem("___________");
    __________= localStorage.getItem("________");
  
  
    document.getElementById("_________").innerHTML= "Bienvenido a la sala #" +____________ + "😀"; 
   
  
 //creamos la función para enviar los mensajes
  
  function enviar_mensaje(){
    
   //guarda el mensaje enviado en una variable


   //se envía a la Firebase
  
  firebase.database().ref(_______________).push(
    {
    usuario:_________, 
    msj:______________, 
    like:0
    });
  
    document.getElementById("________").value="";
  }
  
  
  
  //lectura de base de datos
  
  function leer_datos()
  {
    firebase.database().ref("/"+_____________).on('value', function(carpetas)
    {
      document.getElementById("________________").innerHTML = ""; 
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
           msj = 
           like = 
  
  
           //creamos las labels donde se leeran
           linea_nombre = "<h3 id='linea_nombre'> "+ usuario +" + '✔️'> </h3>";
           linea_msj = "<h3 id='mensaje_enviado'>" + msj + "</h3>";
  
           boton_like ="<button class='btn btn-primary' id="+ key_mensaje +" value= "+ like +" onclick='leer_like(this.id)'>";
           linea_likes = "<h4 <span> 👍 Like: "+ like +"</span> </h4> </button>";
  
          fila = linea_nombre + linea_msj +boton_like + linea_likes;    
          
          //escribe el id del sitio donde se leen los mensajes en la sala

          document.getElementById("_________________").innerHTML += fila;
  
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
      contador_likes = ______________
    
      
      //se guardan los likes en la Firebase
      firebase.database().ref(____________).child(check_boton).update({
          like : contador_likes  
       });
  
  }
  
  function salir() 
  {
  localStorage.removeItem("_________________");
  localStorage.removeItem("___________________");
      window.location = "_____________________";
  }