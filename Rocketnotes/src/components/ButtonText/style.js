import styled from 'styled-components';

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  display: flex;
  justify-content: right;
  margin: 20px 40px 0 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-weight: bold;
  }
`;
