import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { useState } from 'react';
import { MainForm } from './components/MainForm';

export function App() {
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
  const [numero, setNumero] = useState(0);
 
  function handleClick() {
    //setNumero(numero +1)
    setNumero(prevState =>  prevState + 1)
  }
  return (
    <>
     <Heading>{numero}</Heading>
       <button onClick={handleClick}>aumenta</button>

      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
    
         <MainForm />
      </Container>

      <Container> 
        <Footer />
      </Container>
    </>
  );
}
