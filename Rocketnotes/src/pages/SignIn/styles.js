import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 500px auto;
  grid-template-rows: 300px 100px 50px 50px 50px 50px auto;
  grid-template-areas:
    'brand bgimg'
    'loginHeader bgImg'
    'input bgImg'
    'input bgImg'
    'button bgImg'
    'buttonText bgImg';
`;

export const Brand = styled.div``;

export const LoginHeader = styled.div``;

export const BackgroundImg = styled.div``;
