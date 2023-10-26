var imgVisor = document.querySelector("#visor")
var arrayImagen=["Img0"]

function siguiente(){
    if(contador<=arrayImagen.length=1){
    imgVisor.src="img/"+arrayImagen[contador]
    contador++;
    }
}

function anterior(){
    contador--;
    if (contador >=0){
        imgVisor.src="img"+arrayImagen[contador]
    }
}