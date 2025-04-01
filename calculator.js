function energyCalc(e){
    e.preventDefault();
    let equipamento = document.querySelector("#equipamento").value;
    let tempo = document.querySelector("#tempo").value;
    let tempoPor = document.querySelector("#horas-por").value;
    if (!equipamento || !tempo || !tempoPor) {
        alert("Preencha todos os campos corretamente");
        return;
    }
    let kwh = equipamento * tempo;
    document.querySelector("#resultado").innerHTML = `O consumo de energia é de ${kwh} kWh`;
    let custoAnual = 0;
    if (tempoPor == "dia"){
        custoAnual = kwh * 365;
    }else if (tempoPor == "semana"){
        custoAnual = kwh * 52;   
    }else{
        custoAnual = kwh * 12;
    }
    document.querySelector("#resultado").innerHTML += `<br>O custo por ano é de R$ ${custoAnual}`;

}
document.querySelector(".calculator-form").addEventListener("submit", energyCalc);