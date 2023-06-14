import { HTMLAttributes } from 'react';
import { Container } from './styles';

type Props = HTMLAttributes<HTMLInputElement>;

export function Input(props: Props) {
  return (
    <Container {...props} />
  );
}