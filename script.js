const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-principal");

const perguntas = [
  {
    enunciado: "Dra. Helena é uma jovem médica que trabalha no pronto-socorro. Em um plantão movimentado, chega um paciente com sintomas difíceis de identificar. O hospital possui uma nova IA capaz de analisar exames e indicar possíveis diagnósticos.Helena precisa decidir como agir.O que a médica deve fazer?",
    alternativas: [
      "Usar a IA para analisar os exames e ajudar no diagnóstico, 
      "Confiar apenas em sua experiência e analisar os exames sozinha."
    ],
  },
  {
    enunciado: "A IA analisa os exames rapidamente e apresenta algumas possibilidades. Porém, Helena percebe que a tecnologia pode cometer erros e que a decisão final ainda depende de um profissional.Como Helena deve utilizar a informação da IA?",
    alternativas: [
      "Comparar a sugestão da IA com sua própria avaliação antes de decidir.", 
      "Aceitar o resultado da IA sem questioná-lo."
    ],
  },
  {
    enunciado: "Depois de analisar as informações, Helena chega a uma possível solução para o caso. Agora, ela precisa conversar com o paciente e explicar como chegou àquela decisão.Qual deve ser a atitude da médica?",
    alternativas: [
      "Explicar o diagnóstico de forma clara e mostrar que a IA foi apenas uma ferramenta de apoio.", 
      "Dizer apenas que o diagnóstico foi feito pela tecnologia."
    ],
  },
  {
    enunciado: "Após o atendimento, Helena percebe que a inteligência artificial pode transformar a medicina. Porém, também entende que tecnologia e conhecimento humano precisam trabalhar juntos.Como Helena deve enxergar a IA na medicina?",
    alternativas: [
      "Como uma ferramenta que auxilia médicos, sem substituir o cuidado humano.", 
      "Como uma tecnologia capaz de substituir completamente os médicos."
    ],
  },
];

let atual = 0;
let perguntaAtual;
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();