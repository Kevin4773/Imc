/* // Declaração da variável do botão.
const calcular = document.getElementById("calcular")

// Função que será responsável pelo cálculo, declaração das variáveis restantes, e estrutura de decisão para mensagem e correções de bugs.
function imc() {

    // Declaração das variáveis restantes para execução da função. (Obs: colocar dentro da estrutura de decisão, pois elas não serão globais)
    const txtNome = document.getElementById("txtNome").value // Capturando o *valor* das caixas, usando o .value
    const txtAltura = document.getElementById("txtAltura").value
    const txtPeso = document.getElementById("txtPeso").value
    const resultado = document.getElementById("resultado")

    // Estrutura de decição para validar se o botão foi clicado.
    if (txtNome !== '' && txtAltura !== '' && txtPeso !== '') {
        
        // Estrutura de decição para validar o txtNome.
        if (isNaN(txtNome)) {
            
            // Estrutura de decisão para validar as input de números
            if (isNaN(txtPeso) || isNaN(txtAltura)) {
                
                return resultado.textContent = 'Tipo de dado inválido'
            
            } else {
                
                // Execução do cálculo usando .toFixed() para controlar as casas deciamis.
                const valorIMC = (txtPeso / (txtAltura * txtAltura)).toFixed(1)

                // Variável global (let) que vai abrigar as mensagens complementares do IMC.
                let classificacao = '' 

                // Estrutura de decisão para mensagem sobre o IMC.
                if (valorIMC < 18.5) {
                    classificacao = 'abaixo do peso'
                } else if (valorIMC < 24.9) {
                    classificacao = 'com peso ideal. Parabéns!!!'
                } else if (valorIMC < 29.9) {
                    classificacao = 'acima do peso'
                } else if (valorIMC < 34.9) {
                    classificacao = 'com obesidade grau I'
                } else if (valorIMC < 40) {
                    classificacao = 'com obesidade grau II'
                } else {
                    classificacao = 'com obesidade grau III. Cuidado!!!'
                }

                // Mandando a mensagem atráves de uma <div> usando o .textContent
                resultado.textContent = `${txtNome} seu IMC é ${valorIMC} e voçê está ${classificacao}`
            }

        } else {
            
            return resultado.textContent = 'Tipo de dado inválido';
        
        }

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

// Adicinando o botão calcular a função de imc
calcular.addEventListener('click', imc) */
