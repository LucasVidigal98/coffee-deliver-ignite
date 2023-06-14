import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;

  //margin: 72px 160px 0 160px;

  margin-left: 160px;
  margin-right: 160px;
  
  gap: 32px;
`;

export const Label = styled.h5`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
  font-family: 'Baloo 2';
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  margin-bottom: 15px;
`;

export const CheckoutInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CheckoutInfoHeader = styled.div`
  display: flex;

  .title {
    margin-left: 8px;

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
      font-family: 'Roboto';
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
    }

    p + p {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
      font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
      font-family: 'Roboto';
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
    }
  }
`;

export const CheckoutAdress = styled.div`
  //width: 640px;
  height: 330px;
  border-radius: 6px;
  padding: 40px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  .adress-header {
    display: flex;

    &-title {
      margin-left: 8px;

      p {
        color: ${({ theme }) => theme.COLORS.GRAY_700};
        font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
        font-family: 'Roboto';
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
      }

      p + p {
        color: ${({ theme }) => theme.COLORS.GRAY_600};
        font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
        font-family: 'Roboto';
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
      }
    }
  }
`;

export const CheckoutAdressForm = styled.form`
  margin-top: 32px;
`;

export const FormRowFiels = styled.div` 
  .grid-full {
    display: grid;
    grid-template-columns: 1fr;
  }

  .grid-3-columns {
    display: grid;
    grid-template-columns: 200px 1fr 60px;
    gap: 24px;
  }

  .grid-2-columns {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 24px;
  }

  .grid-short {
    display: grid;
    grid-template-columns: 200px;    
  }

  margin-top: 16px;
`;

export const CheckoutPayment = styled.div`
  //width: 640px;S
  height: 160px;
  border-radius: 6px;
  padding: 40px;
  margin-top: 12px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
`;

export const CartInfo = styled.div``;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 448px;
  height: 498px;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;