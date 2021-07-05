import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { menuData } from "../../data/menuData";
import { Button } from "../UI/Button";
import { NavHeader } from "../UI/NavHeader";
import { AiOutlineBars as Bars } from "react-icons/ai";

const navLinks = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  color: #fff;
  cursor: pointer;
`;

const Logo = styled(Link)`
  ${navLinks}
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: #1d8348;
    transform: translateY(-5px);
  }
  @media screen and (max-width: 768px) {
    color: #000;
  }
`;

const MenuBars = styled(Bars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);

    &:hover {
      color: #2ecc71;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  ${navLinks}
  padding: 1rem;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    color: ${({ isscroll }) => (isscroll ? "#58D68D" : "#F0F3F4")};
    transform: translateY(5px);
  }
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = (props) => {
  let [isscroll, setScroll] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 400) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const scrollToComponent = () => {
    scroll.scrollToTop();
  };

  window.addEventListener("scroll", changeBg);

  return (
    <NavHeader isscroll={isscroll}>
      <Logo to="/" onClick={scrollToComponent}>
        VashudhaShree
      </Logo>
      <MenuBars />
      {props.isHomePage && (
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink
              key={index}
              smooth={true}
              spy={true}
              isscroll={isscroll}
            >
              <Link to={item.link}>{item.title}</Link>
            </NavLink>
          ))}
        </NavMenu>
      )}
      <NavBtn>
        <Button primary="true" onClick={props.clicked}>
          Contact US
        </Button>
      </NavBtn>
    </NavHeader>
  );
};

export default Navbar;
