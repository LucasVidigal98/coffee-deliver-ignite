import { Actions, Container, Logo } from './styles';
import { useNavigate } from "react-router-dom";

import { ButtonIcon } from '../ButtonIcon'

import LogoImg from '../../assets/Logo.svg';
import { MapPin } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';
import { useCart } from '../../hooks/useCart';



export function Header() {
  const { COLORS } = useTheme();
  const navigate = useNavigate();

  const {
    numberOfItems
  } = useCart();

  function goToCheckout() {
    navigate('/checkout');
  }

  return (
    <Container>
      <Logo src={LogoImg} />

      <Actions>
        <div className='local'>
          <MapPin size={22} weight="fill" color={COLORS.PURPLE} />
          <span>Porto Alegre, RS</span>
        </div>

        <ButtonIcon type='YELLOW' onClick={goToCheckout} />
        {
          numberOfItems > 0 && <p>{numberOfItems}</p>
        }

      </Actions>
    </Container>
  );
}