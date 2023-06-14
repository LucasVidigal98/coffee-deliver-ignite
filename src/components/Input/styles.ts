import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 42px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-family: 'Roboto';
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 4px;
`;