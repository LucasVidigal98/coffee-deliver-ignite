import { Container, Selected } from './styles';
import { Bank, CreditCard, Money } from '@phosphor-icons/react';
import { useTheme } from 'styled-components';

type Props = {
  title: string;
  icon: 'CREDIT' | 'DEBIT' | 'CASH';
  selected?: boolean;
}

export function SelectPayment({ title, icon, selected = false }: Props) {
  const { COLORS } = useTheme();

  let Icon = <CreditCard size={22} color={COLORS.PURPLE} />;

  switch (icon) {
    case 'DEBIT':
      Icon = <Bank size={22} color={COLORS.PURPLE} />;
      break;
    case 'CASH':
      Icon = <Money size={22} color={COLORS.PURPLE} />;
      break;
    default:
      Icon = <CreditCard size={22} color={COLORS.PURPLE} />;
      break;
  }

  return (
    <>
      {
        !selected ? (
          <Container>
            {Icon}
            <span>{title}</span>
          </Container>
        ) : (
          <Selected>
            {Icon}
            <span>{title}</span>
          </Selected>
        )
      }
    </>
  );
}