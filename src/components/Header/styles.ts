import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 104px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-left: 160px;

  @media (max-width: 760px) {
    margin-left: 50px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    margin-right: 50px;
  }

  .local {
    width: 143px;
    height: 38px;
    border-radius: 6px;
    padding: 4px;
    background-color: ${({ theme }) => theme.COLORS.PURPLE_LIGHT};
    color: ${({ theme }) => theme.COLORS.PURPLE};

    font-weight: 400;
    font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO};
    font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
    margin-right: 12px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-left: 4px;
    }
  }
`; 