import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';

export function App() {

  return <Home />
}

  // sempre que eu usar useState, eu vou ter que importar
  // useState é um hook do react que serve para criar estados
  // useState retorna um array com dois elementos   
  // o primeiro elemento é o valor do estado e o segundo elemento é uma função para atualizar o estado
  // o valor do estado pode ser de qualquer tipo, string, number, boolean, array, object, etc   
  // o segundo elemento é uma função que recebe um novo valor para o estado
  // e atualiza o estado com esse novo valor
  // o valor inicial do estado é passado como argumento para o useState
  // o valor inicial do estado pode ser de qualquer tipo, string, number, boolean, array, object, etc
  // o valor inicial do estado pode ser passado como argumento para o useState

  // sempre que eu usar useState, não vou usar atribuição diretamente

