import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: conic-gradient(
    from 90deg at -10% 100%,
    rgb(188, 193, 205) 0deg,
    rgb(188, 193, 205) 90deg,
    rgb(255, 255, 255) 1turn
  );
  color: white;
`;

export const NavBar = styled.div`
  width: 50%;
  padding: 2rem;
  background-image: conic-gradient(
    from 90deg at -10% 100%,
    rgb(43, 48, 59) 0deg,
    rgb(43, 48, 59) 90deg,
    rgb(22, 24, 29) 1turn
  );
  color: rgb(246, 247, 249);

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 5rem;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  font-size: 4rem;
  color: rgb(246, 247, 249);
  margin-bottom: 2rem;
`;

export const NavButton = styled.button`
  display: block;
  width: 15rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #61dafb;
  color: white;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #4fa3d1;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2rem;
`;
