
function foi(){
let txt = document.getElementById("isso")
let res = document.getElementById("resposta")
let vel = Number(txt.value)
res.innerHTML =`Sua velocidade foi ${vel}`
if(vel >10){
    document.getElementById("resposta").innerHTML= "oloco"
}else{
    body = document.body;
    body.style.background = red
}
}