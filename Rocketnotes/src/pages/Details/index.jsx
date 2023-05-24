import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';


export function Details () {
  
  return (
    <Container>   
      <Header />

      <main>
        <Content>

      <ButtonText title='excluir a nota'/>
        
      <h1>
        Introdução ao React
      </h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae id temporibus et sint quidem, laudantium nesciunt sunt eveniet fugiat, neque, veniam ea. Consequuntur iste magni suscipit aspernatur accusamus! Reprehenderit, quibusdam!</p>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus corporis est temporibus quia, vitae veniam repellendus atque architecto sunt quod doloribus animi aliquid exercitationem tempore repudiandae quaerat consequuntur nam. Atque.</p>

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

      </Content>  
      </main>
    </Container> 
    
    )
}