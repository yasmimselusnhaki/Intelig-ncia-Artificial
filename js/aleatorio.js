const nomes =["Michele", "Luana", "Fernanda", "Gabriel", "Gustavo", "Marcela", "João"];

export function aleatorio (lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return lista [posicao];
}

export const nome = aleatorio(nomes);