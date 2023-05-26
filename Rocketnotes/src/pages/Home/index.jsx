import { Container, Brand, Menu, Search, Content, Newnote } from './styles';

import { AiOutlinePlus } from 'react-icons/ai'
import { RiSearchEyeLine } from 'react-icons/ri'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function Home () {

  return (
  
  <Container>
    <Brand>
    <h1>RocketNotes</h1>
    </Brand>

  <Header />

  <Menu>
    <li><ButtonText title='Todos' ></ButtonText></li>
    <li><ButtonText title='Front-end'></ButtonText></li>
    <li><ButtonText title='React' isActive></ButtonText></li>
    <li><ButtonText title='Nodejs'></ButtonText></li>

  </Menu>

  <Search>
    <Input placeholder="Pesquisar pelo Título" icon={RiSearchEyeLine}/>
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