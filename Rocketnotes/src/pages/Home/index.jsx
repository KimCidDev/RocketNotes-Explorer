import { Container, Brand, Menu, Search, Content, Newnote } from './styles';

import { AiOutlinePlus } from 'react-icons/ai'
import { RiSearchEyeLine } from 'react-icons/ri'
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';
import { Note } from '../../components/Note';

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
    <Section title="Minhas Notas"> 
      <Note data={{
        title: 'React',
        tags: [
          {id: '1', name: 'React'},
          {id: '2', name: 'Rockeseat'}
        ]
      }}
      />

    </Section>
  </Content>
  

  <Newnote> 
  <AiOutlinePlus />
    Criar Nota
  </Newnote>

  </Container>
  );
};