import { Container, Content, Title } from './styles';

import { CoffeeCard } from '../../components/CoffeeCard';

export function Home() {
  return (
    <Container>
      <Title>Nossos cafés</Title>

      <Content>
        <CoffeeCard
          price='9,90'
          description='O tradicional café feito com água quente e grãos moídos'
          tags={['tradicional', 'gelado']}
          title='Expresso Tradicional gelado'
          id={10}
        />

        <CoffeeCard
          price='9,90'
          description='O tradicional café feito com água quente e grãos moídos'
          tags={['tradicional']}
          title='Expresso Tradicional'
          id={11}
        />

      </Content>
    </Container>
  );
}