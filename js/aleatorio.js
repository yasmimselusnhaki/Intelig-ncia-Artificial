const nomes =["Michele", "Luana", "fernanda", "Gabriel", "Gustavo", "Marcela", "Joao"];

export function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return lista [posicao];
}

const nome = aleatorio(nomes);