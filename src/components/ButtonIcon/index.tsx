import { useTheme } from 'styled-components';
import { Container } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';

type Props = {
  type: 'YELLOW' | 'PURPLE';
}

export function ButtonIcon({ type }: Props) {
  const { COLORS } = useTheme();

  const color = type === 'YELLOW' ? COLORS.YELLOW_DARK : COLORS.WHITE;

  return (
    <>
      <Container type={type}>
        <ShoppingCart
          size={22}
          color={color}
          weight='fill'
        />
      </Container>
    </>
  );
}