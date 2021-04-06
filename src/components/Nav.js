import styled from "styled-components";

import logo_dark from "../assets/shared/desktop/logo-dark.png";

const Nav = () => {
  return (
    <NavStyle>
      <Logo src={logo_dark} />
      <Burger>
        <Line className="line1" />
        <Line className="line2" />
        <Line className="line3" />
      </Burger>
    </NavStyle>
  );
};

const NavStyle = styled.nav`
  min-height: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
`;

const Logo = styled.img`
  max-width: 12.5rem;
`;
const Burger = styled.div`
  position: relative;

  cursor: pointer;
`;
const Line = styled.span`
  background: var(--burger-span);
  padding: 0.125rem 0.75rem;
  margin: 0.25rem 0rem;
  display: block;
  transition: all 0.5s ease;
`;

export default Nav;
