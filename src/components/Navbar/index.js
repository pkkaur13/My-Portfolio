import React from 'react';
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translated(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navlink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.6s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? '100%' : '0')};
  z-index: ${({ open }) => (open ? '1000' : '-1000')};
`;

const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <DiCssdeck size="3rem" /> <Span>PK</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <Navlink href="#about">About</Navlink>
          <Navlink href="#skills">Skills</Navlink>
          <Navlink href="#experience">Experience</Navlink>
          <Navlink href="#projects">Projects</Navlink>
          <Navlink href="#education">Education</Navlink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href="https://github.com/pkkaur13/">Github Profile</GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLink
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </MobileMenuLink>
          <MobileMenuLink
            href="#skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Skills
          </MobileMenuLink>
          <MobileMenuLink
            href="#experience"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Experience
          </MobileMenuLink>
          <MobileMenuLink
            href="#projects"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Projects
          </MobileMenuLink>
          <MobileMenuLink
            href="#education"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Education
          </MobileMenuLink>
          <GithubButton
            style={{
              padding: '10px 16px',
              background: theme.primary,
              color: 'white',
              width: 'max-content'
            }}
            href="https://github.com/pkkaur13/"
            target="_blank"
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
