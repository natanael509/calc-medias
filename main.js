const form = document.getElementById('form-calc');
const imgAprovado = '<img src="./Imagens/aprovado.png" alt="emoji celebrando" /> ';
const imgReprovado = '<img src="./Imagens/reprovado.png" alt="emoji triste" /> ';
const atividades = [];
const notas = [];
const aprovado = '<span class="resultado Aprovado"> Aprovado </span>'
const reprovado = '<span class="resultado reprovado"> Reprovado </span>'
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha()
    atualizaçaoTabela()
    atualizaMediaFinal()
});


function adicionarLinha() {
    
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi usada`);
    } else{
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

    function atualizaçaoTabela() {
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMediaFinal(){
    const mediaFinal = calcMediaFinal();
    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= 7 ? aprovado : reprovado ;
}

function calcMediaFinal(){
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;

}