import {aleatorio, nome} from './aleatorio.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoiniciar =document.querySelector(".iniciar.btn");
const telainicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoiniciar.addEventListener('click', iniciajogo);
function iniciaJogo() {
atual = 0;
historiaFinal = "";
telaInicial.style.display = 'none';
caixaPerguntas.classList.remove("mostrar");
caixaAlternativas.classList.remove("mostrar");
caixaResultado.classList.remove("mostrar");
mostraPergunta();
}

function mostraPergunta() {
  if(atual >= perguntas.length){
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();

}

function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
      caixaAlternativas.appendChild(botaoAlternativas);
   }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    if(opcaoSelecionada.proxima != undefined){
      atual = opcaoSelecionada.proxima;
    }else {
      mostraResultado();
      return;
    }
    mostraPergunta();
      
}

function mostraResultado(){
  caixaPerguntas.textContent = `futuramente, ${nome}`;
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  caixaResultado.classList.add("mostrar");
  botaoJogarNovamente.addEventListener("click", jogaNovamente);

}

function jogaNovamente(){
  atual = 0;
  historiaFinal = "";
  caixaAlternativas.classList.remove("mostrar");
  mostraPergunta();
}
function substituiNome(){
for(const pergunta of perguntas){
pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();
