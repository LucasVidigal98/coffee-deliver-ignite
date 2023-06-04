import styled from 'styled-components';

type Props = {
  type: 'YELLOW' | 'PURPLE';
}

export const Container = styled.div<Props>(({ theme, type }) => ({
  background: type === 'YELLOW' ? theme.COLORS.YELLOW_LIGHT : theme.COLORS.PURPLE_DARK,
  height: '38px',
  width: '38px',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '4px'
}));

