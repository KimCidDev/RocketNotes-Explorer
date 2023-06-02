import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding-bottom: 36px;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 550px;
  margin: 0 auto;

  > header {
    margin: 34px 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
