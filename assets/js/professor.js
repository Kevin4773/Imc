function calcularIMC(txtPeso, txtAltura) {
    
    return txtPeso / (txtAltura * txtAltura)

}

function classificar(imc) {
    
    // let é uma variável que pode ser alterada ao decorrer de seu uso
    let categoria
    
    if (imc < 18.5) {
        categoria = 'abaixo do peso'
    } else if (imc < 25) {
        categoria = 'com peso ideal. <span class="azul">Parabéns!!!</pan>'
    } else if (imc < 30) {
        categoria = 'acima do peso'
    } else if (imc < 35) {
        categoria = 'com obesidade grau I'
    } else if (imc < 40) {
        categoria = 'com obesidade grau II'
    } else {
        categoria = 'com obesidade grau III. <span class"vermelho">Cuidado!!!</span>'
    }
    
    return categoria
}

function camposValidos() {
    
    return document.querySelector("form").reportValidity()

}

function Imc() {
    
    // Forma de pegar um seletor para podemos manipula-ló
    // const teste = document.querySelector(#teste)
    
    // Declaração de variáveis
    
    const nome = document.getElementById("txtNome").value
    const altura = document.getElementById("txtAltura").value
    const peso = document.getElementById("txtPeso").value
    const resultado = document.getElementById("resultado")
    
    if (camposValidos()) {
        const imc = calcularIMC (peso, altura)
        const classificacao = classificar (imc)
        resultado.innerHTML = `${nome} seu IMC é ${imc.toFixed(1)} e você está ${classificacao}`
    } else {
        resultado.textContent = "Preencha todos os campos!!!"
    }
}

function capturarEnter(evento) {
    
    if (evento.key == "Enter") {
        Imc()
    }
}

// Eventos
document.getElementById("calcular").addEventListener("click", Imc)
document.querySelector("form").addEventListener("keypress", capturarEnter)