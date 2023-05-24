import { Container, Links } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';


export function Details () {
  
  return (
    <Container>   
      <Header />
      <ButtonText title='excluir a nota'/>
        
      <Section title="links úteis">
        <Links>
        <li>
          <a href="">https://www.globoesporte.com/gremio</a>
          </li>
        <li>
          <a href="">https://www.folha.com.br</a>
          </li>
        <li>
          <a href="">https://www.notion.so</a>
          </li>

        </Links>
      </Section>

        
      <Section title="Marcadores">
      <Tag title="express" />
      <Tag title="nodeJs" />

      </Section>
      <Button title="Voltar" />
    </Container> 
    
    )
}