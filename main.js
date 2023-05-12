function click1(){
    var nombre= document.getElementById("input").value
    localStorage.setItem("nombre", nombre)
    window.location="index2.html"
}