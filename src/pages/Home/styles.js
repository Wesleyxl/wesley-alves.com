import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 60px;
  .container {
    height: calc(100vh - 60px);
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 15px;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .welcome {
      text-align: center;
      h3 {
        font-size: 35px;
      }
      h1 {
        margin: 20px 0;
        font-size: 70px;
      }
      p {
        font-size: 30px;
      }

      @media (max-width: 1080px) {
        h3 {
          font-size: 25px;
        }
        h1 {
          margin: 20px 0;
          font-size: 40px;
        }
        p {
          font-size: 22px;
        }
      }
    }
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
