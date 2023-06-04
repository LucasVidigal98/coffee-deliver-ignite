import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  padding-left: 160px;
  // padding-right: 160px;

  flex-direction: column;
  display: flex;

  @media (max-width: 760px) {
    padding-left: 50px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_L}px;
  font-family: 'Baloo 2';
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.EXTRA_BOLD};
`;

export const Content = styled.main`
  width: 100%;
  height: 100%;

  margin-top: 54px;

  flex-wrap: wrap;
  display: flex;
  gap: 32px;
`;