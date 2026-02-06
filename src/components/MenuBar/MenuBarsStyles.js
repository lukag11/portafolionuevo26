import styled from "styled-components";

export const ContainerMenuHamburger = styled.div`
  display: none;
  height: 55%;
  width: 2.2rem;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const MenuIcon = styled.span`
  position: relative;
  height: 1.5px;
  width: 75%;
  background: ${(props) =>
    props.clicked ? "transparente" : " var(--neon-pink)"};
  display: inline-block;
  transition: all 0.3s;

  &::before,
  &::after {
    background-color: var(--neon-blue);
    content: "";
    width: 100%;
    height: 1.5px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.8s;
  }

  &::before {
    top: ${(props) => (props.clicked === true ? "0" : "-0.5rem")};
    transform: ${(props) =>
      props.clicked === true ? "rotate(135deg)" : "rotate(0)"};
  }

  &::after {
    top: ${(props) => (props.clicked === true ? "0" : "0.5rem")};
    transform: ${(props) =>
      props.clicked === true ? "rotate(-135deg)" : "rotate(0)"};
  }
`;
