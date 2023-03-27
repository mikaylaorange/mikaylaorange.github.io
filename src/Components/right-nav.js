import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: none;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    
    flex-flow: column nowrap;
    background-color: rgba(22, 44, 58, 0.9);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    font-family: 'Josefin Sans', sans-serif;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: rgb(217, 124, 80);
    }
  }
`;

const RightNav = ({ open }) => {
  const handleAboutClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#about"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const handleWorkClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#work"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const handleContactClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#contact"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
      open=!open;
      console.log(open)
    }
  };
  return (
    <Ul open={open}>
      <li onClick={handleAboutClick}>About</li>
      <li onClick={handleWorkClick}>Work</li>
      <li onClick={handleContactClick}>Contact</li>
    </Ul>
  )
}

export default RightNav