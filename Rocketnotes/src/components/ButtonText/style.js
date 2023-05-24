import styled from 'styled-components';

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.ORANGE};

  border: none;
  font-size: 16px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-weight: bold;
  }
`;
