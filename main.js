const  altura=document.getElementById("altura")
const  peso=document.getElementById("peso")
const  boton_calcular=document.getElementById("button_calcular")
const  boton_reiniciar=document.getElementById("button_reiniciar")
const  blockresul=document.getElementById("blockresul")
letresultado='';
button_calcular.addEventListener(`click`, function() {
    if ((altura.value == "") || (altura.value == "")) {
        alert("Debes llenar los espacios en blanco")
    } else if ((peso.value <= 0) || (peso.value >= 700)) {
        alert("El valor del peso no esta en los rangos establecidos");
        peso.value = "";
        altura.value="";
    } else {
        if ((altura.value >= 50) & (peso.value <= 300)) {
        resultado=  (Number(peso.value)/(Number((altura.value)/100)**2))
        blockresul.textContent=(`el resultado es  ${resultado}`)
        if(resultado<18.5){
            blockresul.textContent=(`masa corporal baja ${resultado}`)
            child.style.rotate = '-75deg'
        }
        if((resultado>=18.5) &&(resultado<=24.9)){
            blockresul.textContent=(`masa corporal comun${resultado}`)
            child.style.rotate = '-25deg';
        }
        if((resultado>=25.0) &&(resultado<=29.9)){
            blockresul.textContent=(`masa corporal superior ${resultado}`)
            child.style.rotate = '27deg';
        }
        if(resultado>=30.0){
            blockresul.textContent=(`masa corporal en estado de obesidad ${resultado}`)
            child.style.rotate = '78deg';
        }
        
 }else if ((alturaUsuario.value >= 0.50) & (alturaUsuario.value <= 3)) {
    resultado = (pesoUsuario.value / alturaUsuario.value ** 2);
    blockresul.textContent=(`el resultado es  ${resultado}`)
        if(resultado<18.5){
            blockresul.textContent=(`masa corporal baja ${resultado}`)
            child.style.rotate = '-75deg'
        }
        if((resultado>=18.5) &&(resultado<=24.9)){
            blockresul.textContent=(`masa corporal comun${resultado}`)
            child.style.rotate = '-25deg';
        }
        if((resultado>=25.0) &&(resultado<=29.9)){
            blockresul.textContent=(`masa corporal superior ${resultado}`)
            child.style.rotate = '27deg';
        }
        if(resultado>=30.0){
            blockresul.textContent=(`masa corporal en estado de obesidad ${resultado}`)
            child.style.rotate = '78deg';
        } 
        }else {
            alert("El valor de la altura no esta en los rangos establecidos")
        }
    }
})
button_reiniciar.addEventListener(`click`, function() {
        peso.value = "";
        altura.value = "";
        blockresul.textContent = "";
        child.style.rotate = '-90deg';
    })


