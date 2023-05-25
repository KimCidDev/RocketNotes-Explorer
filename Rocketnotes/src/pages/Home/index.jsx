import { Container, Brand, Menu, Search, Content, Newnote } from './styles';

import { AiOutlinePlus } from 'react-icons/ai'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';

export function Home () {

  return (
  
  <Container>
    <Brand>
    <h1>RocketNotes</h1>
    </Brand>

  <Header />

  <Menu>
    <li><ButtonText title='Todos' isActive></ButtonText></li>
    <li><ButtonText title='Front-end'></ButtonText></li>
    <li><ButtonText title='React'></ButtonText></li>
    <li><ButtonText title='Nodejs'></ButtonText></li>

  </Menu>

  <Search>

  </Search>

  <Content>

  </Content>

  

  <Newnote> 
  <AiOutlinePlus />
    Criar Nota
  </Newnote>

  </Container>
  );
};