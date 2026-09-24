const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Dra. Helena é uma jovem médica que trabalha no pronto-socorro. Em um plantão movimentado, chega um paciente com sintomas difíceis de identificar. O hospital possui uma nova IA capaz de analisar exames e indicar possíveis diagnósticos.Helena precisa decidir como agir.O que a médica deve fazer?",
    alternativas: [
      {
        texto: "Usar a IA para analisar os exames e ajudar no diagnóstico", 
        afirmacao: [
        "A tecnologia pode oferecer uma nova perspectiva para situações médicas complexas.",
        "Helena decide integrar a tecnologia ao seu fluxo de trabalho, usando os dados da IA como uma segunda opinião rápida para orientar seus próximos passo."
      ]
      },
      {
        texto: "Confiar apenas em sua experiência e analisar os exames sozinha.",
        afirmacao: [
        "A experiência profissional permite tomar decisões com base no conhecimento adquirido ao longo da carreira.",
        "Helena opta por confiar estritamente em seu conhecimento clínico, examinando minuciosamente cada detalhe do caso por conta própria."
      ]
      }
    ]
  },
  {
    enunciado: "A IA analisa os exames rapidamente e apresenta algumas possibilidades. Porém, Helena percebe que a tecnologia pode cometer erros e que a decisão final ainda depende de um profissional.Como Helena deve utilizar a informação da IA?",
    alternativas: [
      {
        texto:"Comparar a sugestão da IA com sua própria avaliação antes de decidir.",
        afirmacao: [
        "Helena pode analisar a informação recebida antes de decidir como agir diante do caso.",
          "Helena cruza os dados do algoritmo com sua análise dos exames, usando a IA como um filtro complementar sem abrir mão do seu próprio raciocínio clínico."
      ]
      },
      {
        texto:"Aceitar o resultado da IA sem questioná-lo.",
        afirmacao: [
        "Helena pode considerar a sugestão apresentada pela tecnologia como parte de sua tomada de decisão.",
        "Helena confia na precisão dos dados automatizados e segue imediatamente a conduta indicada pelo sistema para acelerar o tratamento."
      ]
      }
    ]
  },
  {
    enunciado: "Depois de analisar as informações, Helena chega a uma possível solução para o caso. Agora, ela precisa conversar com o paciente e explicar como chegou àquela decisão.Qual deve ser a atitude da médica?",
    alternativas: [
      {
        texto:"Explicar o diagnóstico de forma clara e mostrar que a IA foi apenas uma ferramenta de apoio.",
        afirmacao: [
        "Helena pode apresentar ao paciente os motivos que levaram à sua decisão e explicar o papel da tecnologia nesse processo.",
        "Helena conversa humanamente com o paciente, esclarecendo cada detalhe do quadro e explicando que a tecnologia serviu apenas para complementar seu julgamento médico."
      ]
      },
      {
        texto: "Dizer apenas que o diagnóstico foi feito pela tecnologia.",
        afirmacao: [
        "Helena pode atribuir o resultado à análise realizada pela ferramenta, sem detalhar o processo de avaliação",
        "Helena repassa a conclusão de forma direta e objetiva, atribuindo a precisão da análise à eficiência da inteligência artificial."
      ]
      }
    ]
  },
  {
    enunciado: "Após o atendimento, Helena percebe que a inteligência artificial pode transformar a medicina. Porém, também entende que tecnologia e conhecimento humano precisam trabalhar juntos.Como Helena deve enxergar a IA na medicina?",
    alternativas: [
      {
        texto: "Como uma ferramenta que auxilia médicos, sem substituir o cuidado humano.",
        afirmacao: [
        "Helena percebe que a tecnologia pode contribuir para diferentes etapas do atendimento médico",
        "Helena passa a enxergar a IA como uma aliada estratégica, capaz de potencializar suas decisões clínicas sem jamais anular a empatia e o toque humano."
      ]
      },
      {
        texto: "Como u[ma tecnologia capaz de substituir completamente os médicos.",
        afirmacao:[
         "Helena considera a possibilidade de a tecnologia assumir um papel cada vez maior na área da saúde.",
         "Helena passa a ver a automação total como o caminho inevitável da saúde, acreditando que algoritmos avançados superarão qualquer limite da mente humana."
        ]
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
      
}

function mostraResultado(){
  caixaPerguntas.textContent = "futuramente...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = ""
}

function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return lista [posicao];
}
mostraPergunta();