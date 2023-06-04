import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 256px;
  height: 310px;
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding-left: 20px;
  padding-right: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const CoffeImg = styled.img`
  margin-top: -15px;
  margin-bottom: 16px;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  .tag {
    border-radius: 100px;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT};
    color: ${({ theme }) => theme.COLORS.YELLOW};
    font-size: ${({ theme }) => theme.FONT_SIZE.TAG}px;
    font-family: 'Roboto';
    text-transform: uppercase;
    padding: 5px;
    text-align: center;
  }
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  font-family: 'Baloo 2';
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  margin-top: 16px;
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  font-family: 'Roboto';
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  text-align: center;
  margin-top: 8px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
  margin-bottom: 23px;

  .price {
    .currency {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
      font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
      font-family: 'Roboto';
      font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
      margin-right: 5px;
    }

    color: ${({ theme }) => theme.COLORS.GRAY_600};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    font-family: 'Baloo 2';
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.EXTRA_BOLD};
    margin-right: 23px;
  }

  .ammount {
    width: 72px;
    height: 38px;
    border-radius: 6px;
    margin-right: 8px;
    padding: 4px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.COLORS.GRAY_800};
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};

    font-size: ${({ theme }) => theme.FONT_SIZE.M}px;
    font-family: 'Roboto';
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};

    .ammount-btn {
      cursor: pointer;
    }
  }
`;