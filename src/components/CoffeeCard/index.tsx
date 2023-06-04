import { CoffeImg, Container, Footer, Info, TagContainer, Title } from './styles';

import TradicionalImg from '../../assets/coffee/Tradicional.svg';
import { ButtonIcon } from '../ButtonIcon';
import { Minus, Plus } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { useState } from 'react';

export type Props = {
  title: string;
  description: string;
  tags: string[];
  price: string;
}

export function CoffeeCard({ title, description, price, tags }: Props) {
  const [ammount, setAmmount] = useState(1);

  const { COLORS } = useTheme();

  function handleIncreaseAmmount() {
    return setAmmount(ammount + 1);
  }

  function handleDecreaseAmmount() {
    if (ammount - 1 === 0) {
      return;
    }

    return setAmmount(ammount - 1);
  }

  return (
    <Container>
      <CoffeImg src={TradicionalImg} />

      <TagContainer>
        {
          tags.map((tag) => (
            <div className='tag' key={tag} >{tag}</div>

          ))
        }
      </TagContainer>

      <Title>
        {title}
      </Title>

      <Info>
        {description}
      </Info>

      <Footer>
        <span className='price'>
          <span className='currency'>R$</span>

          {price}
        </span>

        <div className='ammount'>
          <Minus onClick={handleDecreaseAmmount} className='ammount-btn' size={18} weight="thin" color={COLORS.PURPLE} />

          {ammount}

          <Plus onClick={handleIncreaseAmmount} className='ammount-btn' size={18} weight="thin" color={COLORS.PURPLE} />
        </div>

        <ButtonIcon type='PURPLE' />
      </Footer>
    </Container>
  );
}