import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 285px;

.title {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px 15px;
}

.content {
  background: rgba(0, 0 ,0, .5);
  width: 100%;
  height: 100%;
  
  .projects-area {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: scroll;
    
    ::-webkit-scrollbar {
      display: none;
    } 

    .card {
      position: relative;
      transition: .5s ease;

      :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0 ,0, .5);
        transition: .5s ease;
      }

      :hover {
        transition: .5s ease;
        cursor: pointer;
        img {
          transition: .5s ease;
          transform: scale(1.2)
        }
      }
      
    }

  }
  
}
`;
