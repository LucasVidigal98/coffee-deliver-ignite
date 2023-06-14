import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react';
import { Cart, CartInfo, CheckoutAdress, CheckoutAdressForm, CheckoutInfo, CheckoutInfoHeader, CheckoutPayment, Container, FormRowFiels, Label, PaymentContainer } from './styles';
import { useTheme } from 'styled-components';
import { Input } from '../../components/Input';
import { SelectPayment } from '../../components/SelectPayment';
import { useCart } from '../../hooks/useCart';

export function Checkout() {
  const { COLORS } = useTheme();

  const { cart } = useCart();

  return (
    <Container>
      <CheckoutInfo>
        <Label>Complete seu pedido</Label>
        <CheckoutAdress>
          <CheckoutInfoHeader>
            <MapPinLine size={22} color={COLORS.YELLOW_DARK} />

            <div className='title'>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CheckoutInfoHeader>

          <CheckoutAdressForm>
            <FormRowFiels>
              <div className='grid-short'>
                <Input placeholder='CEP' />
              </div>
            </FormRowFiels>

            <FormRowFiels>
              <div className='grid-full'>
                <Input placeholder='CEP' />
              </div>
            </FormRowFiels>

            <FormRowFiels>
              <div className='grid-2-columns'>
                <Input placeholder='Número' />

                <Input placeholder='Complemento' />
              </div>

            </FormRowFiels>

            <FormRowFiels>
              <div className='grid-3-columns'>
                <Input placeholder='Bairro' />

                <Input placeholder='Cidade' />

                <Input placeholder='UF' />
              </div>
            </FormRowFiels>
          </CheckoutAdressForm>

        </CheckoutAdress>

        <CheckoutPayment>
          <CheckoutInfoHeader>
            <CurrencyDollar size={22} color={COLORS.PURPLE} />

            <div className='title'>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </CheckoutInfoHeader>

          <PaymentContainer>
            <SelectPayment icon='CREDIT' title='Cartão de crédito' selected />
            <SelectPayment icon='DEBIT' title='cartão de débito' />
            <SelectPayment icon='CASH' title='dinheiro' />
          </PaymentContainer>
        </CheckoutPayment>
      </CheckoutInfo>

      <CartInfo>
        <Label>Cafés selecionados</Label>

        <Cart>
          {
            cart.map(({ id, amount, title }) => (
              <div key={id}>
                <p>{title}</p>
                <p>{amount}</p>
              </div>
            ))
          }
        </Cart>
      </CartInfo>
    </Container>
  );
}