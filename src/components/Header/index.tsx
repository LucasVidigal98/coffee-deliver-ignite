import { Actions, Container, Logo } from './styles';

import { ButtonIcon } from '../ButtonIcon'

import LogoImg from '../../assets/Logo.svg';
import { MapPin } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

export function Header() {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Logo src={LogoImg} />

      <Actions>
        <div className='local'>
          <MapPin size={22} weight="fill" color={COLORS.PURPLE} />
          <span>Porto Alegre, RS</span>
        </div>

        <ButtonIcon type='YELLOW' />
      </Actions>
    </Container>
  );
}