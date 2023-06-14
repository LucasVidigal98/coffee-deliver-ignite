import { useTheme } from 'styled-components';
import { Container } from './styles';
import { ShoppingCart } from '@phosphor-icons/react';
import { CartItem } from '../../reducers/cart/reducer';
import { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  type: 'YELLOW' | 'PURPLE';
}

export function ButtonIcon({ type, ...rest }: Props) {
  const { COLORS } = useTheme();

  const color = type === 'YELLOW' ? COLORS.YELLOW_DARK : COLORS.WHITE;

  return (
    <>
      <Container type={type} {...rest}>
        <ShoppingCart
          size={22}
          color={color}
          weight='fill'
        />
      </Container>
    </>
  );
}