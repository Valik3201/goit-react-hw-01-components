import styled, { keyframes } from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-image: conic-gradient(
    from 90deg at -10% 100%,
    rgb(188, 193, 205) 0deg,
    rgb(188, 193, 205) 90deg,
    rgb(255, 255, 255) 1turn
  );
  color: white;
`;

export const NavBar = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '-50%' : '0')};
  width: 50%;
  height: 100vh;
  padding: 2rem;
  background-image: conic-gradient(
    from 90deg at -10% 100%,
    rgb(43, 48, 59) 0deg,
    rgb(43, 48, 59) 90deg,
    rgb(22, 24, 29) 1turn
  );
  color: rgb(246, 247, 249);
  transition: left 500ms ease-in-out;
  z-index: 10;

  @media (max-width: 768px) {
    width: 100%;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    padding-top: 4rem;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
  }
`;

export const BurgerButton = styled.div`
  display: none;
  color: ${({ isOpen }) => (isOpen ? '#61dafb' : '#24292e')};
  font-size: 2rem;
  cursor: pointer;
  transition: color 500ms ease-in-out;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 10;
  }
`;

export const Logo = styled.img`
  width: 5rem;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: rgb(246, 247, 249);
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
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
  width: 50%;
  padding: 2rem;
  margin-left: ${({ isOpen }) => (isOpen ? '0' : '50%')};
  opacity: 1;
  transition: opacity 500ms ease-in-out;
  animation: ${({ fadeType }) => (fadeType === 'in' ? fadeIn : fadeOut)} 500ms;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0.01;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.01;
  }
`;
