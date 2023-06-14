import styled from 'styled-components';

export const Container = styled.div`
  width: 178px;
  height: 51px;
  border-radius: 6px;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};

  font-family: 'Roboto';
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.S}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  text-transform: uppercase;

  gap: 12px;
  cursor: pointer;
`;

export const Selected = styled(Container)`
  border: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
`;