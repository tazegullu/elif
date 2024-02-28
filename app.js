function  Calculate(){
    let kg = document.getElementById("kg").value;
    let ml = document.getElementById("ml").value;

    if(kg != "" && ml!=""){
        document.getElementById("total").innerText = "Toplam: " + kg*ml;
        document.getElementById("doz").innerText = "Doz: " + kg*ml/5;
    }
    else{
        document.getElementById("total").innerText = "";
        document.getElementById("doz").innerText = "";
    }
}