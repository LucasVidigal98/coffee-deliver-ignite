import { CoffeImg, Container, Footer, Info, TagContainer, Title } from './styles';

import TradicionalImg from '../../assets/coffee/Tradicional.svg';
import { ButtonIcon } from '../ButtonIcon';
import { Minus, Plus } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { useState } from 'react';
import { CartItem } from '../../reducers/cart/reducer';
import { useCart } from '../../hooks/useCart';

export type Props = {
  description: string;
  tags: string[];
  title: string;
  price: string;
  id: number;
}


export function CoffeeCard({ title, description, price, tags, id }: Props) {
  const [amount, setAmmount] = useState(1);

  const { COLORS } = useTheme();

  const { addNewItem, increaseItem, cart } = useCart();

  function handleIncreaseAmmount() {
    return setAmmount(amount + 1);
  }

  function handleDecreaseAmmount() {
    if (amount - 1 === 0) {
      return;
    }

    return setAmmount(amount - 1);
  }

  function handleAddNewItem(item: Props) {
    const cartItem: CartItem = {
      ...item,
      amount,
      price: parseFloat(price)
    }

    const inCart = cart.find(({ id }) => id === cartItem.id);

    if (inCart) {
      return increaseItem(cartItem, amount)
    }

    return addNewItem(cartItem);
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

          {amount}

          <Plus onClick={handleIncreaseAmmount} className='ammount-btn' size={18} weight="thin" color={COLORS.PURPLE} />
        </div>

        <ButtonIcon type='PURPLE' onClick={() => handleAddNewItem({
          title, price, tags,
          description,
          id
        })} />
      </Footer>
    </Container>
  );
}