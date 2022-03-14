import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  padding: 0 25px;
  @media (max-width: 500px) {
    padding: 0 15px;
  }
  
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      a {
        color: #ffffff;
        font-weight: bold;
        font-size: 25px;
      }
    }
    
    .navbar {
      .btn {
        display: none;

        button {
          width: 26px;
          height: 20px;
          border: none;
          background: none;

          span {
            display: block;
            width: 100%;
            height: 4px;
            border-radius: 2px;
            background: #ffffff;
            margin-bottom: 4px;
            transform-origin: left;
            transition: .5s ease;

            :nth-child(2) {
              transform: scale3d(.7, 1, 1);
            }
            :nth-child(3) {
              transform: scale3d(.5, 1, 1);
            }
          }
        }

        .active {
          span {
            transform-origin: right;
            :nth-child(2) {
              transform: scale3d(.7, 1, 1);
            }
            :nth-child(3) {
              transform: scale3d(.5, 1, 1);
            }
          }
        }
      }

      ul {
        display: flex;
  
        li {
          margin: 0 15px;
  
          a {
            color: #ffffff;
            position: relative;
            
            :before {
              content: "";
              position: absolute;
              bottom: -5px;
              left: 0;
              width: 100%;
              height: 4px;
              border-radius: 2px;
              background: #ffffff;
              transform-origin: center;
              transform: scale3d(0, 1, 1);
              transition: .5s ease;
            }
            :after {
              content: "";
              position: absolute;
              bottom: -10px;
              left: 25%;
              width: 50%;
              height: 4px;
              border-radius: 2px;
              background: #ffffff;
              transform-origin: center;
              transform: scale3d(0, 1, 1);
              transition: .5s ease;
            }
  
            :hover {
              font-weight: bold;
  
              :before, :after {
                transform: scale3d(1, 1, 1);
              }
            }
          }
  
          .active {
            font-weight: bold;
            :before, :after {
              transform: scale3d(1, 1, 1);
            }
          }
        }
      }

      @media(max-width: 500px) {
        .btn {
          display: block;
        }

        ul {
          position: fixed;
          top: 0;
          left: -100%;
          width: 80%;
          height: 100vh;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #000000;
          transition: .5s ease;
          
          li {
            margin: 20px 0;
          }
        }

        .navbar-active {
          left: 0;
        }
      }
    }
  }
`;
