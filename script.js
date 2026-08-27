const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-principal");

const perguntas = [
  {
    enunciado: "Dra. Helena é uma jovem médica que trabalha no pronto-socorro. Em um plantão movimentado, chega um paciente com sintomas difíceis de identificar. O hospital possui uma nova IA capaz de analisar exames e indicar possíveis diagnósticos.Helena precisa decidir como agir.O que a médica deve fazer?",
    alternativas: [
      {
        texto: "Usar a IA para analisar os exames e ajudar no diagnóstico, 
        afirmacao: "afirmacao"
      },
      {
        texto: "Confiar apenas em sua experiência e analisar os exames sozinha."
        afirmacao: "afirmacao"
      }
    ]
  },
  {
    enunciado: "A IA analisa os exames rapidamente e apresenta algumas possibilidades. Porém, Helena percebe que a tecnologia pode cometer erros e que a decisão final ainda depende de um profissional.Como Helena deve utilizar a informação da IA?",
    alternativas: [
      {
        texto:"Comparar a sugestão da IA com sua própria avaliação antes de decidir.",
        afirmacao: "afirmacao"
      },
      {
        texto:"Aceitar o resultado da IA sem questioná-lo."
        afirmacao: "afirmacao"
      }
    ]
  },
  {
    enunciado: "Depois de analisar as informações, Helena chega a uma possível solução para o caso. Agora, ela precisa conversar com o paciente e explicar como chegou àquela decisão.Qual deve ser a atitude da médica?",
    alternativas: [
      {
        texto:"Explicar o diagnóstico de forma clara e mostrar que a IA foi apenas uma ferramenta de apoio.",
        afirmacao: "afirmacao"
      },
      {
        texto: "Dizer apenas que o diagnóstico foi feito pela tecnologia.",
        afirmacao: "afirmacao"
      }
    ]
  },
  {
    enunciado: "Após o atendimento, Helena percebe que a inteligência artificial pode transformar a medicina. Porém, também entende que tecnologia e conhecimento humano precisam trabalhar juntos.Como Helena deve enxergar a IA na medicina?",
    alternativas: [
      {
        texto: "Como uma ferramenta que auxilia médicos, sem substituir o cuidado humano.",
        afirmacao: "afirmacao"
      },
      {
        texto: "Como uma tecnologia capaz de substituir completamente os médicos."
        afirmacao: "afirmacao"
      }
    ]
  },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();

}

function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativa = document. createElement("button");
      botaoAlternativa.textContent = alternativa.texto;
      botaoAlternativa.addEventlistener("click", function() {
        atual++;
        mostraPergunta();
      })
      caixaAlternativas.appendChild(botaoAlternativa);
   }
}
mostraPergunta();