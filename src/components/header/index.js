import * as Styled from './style'
import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { CgLoadbarDoc } from "react-icons/cg";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import imageThamires from '../../images/thamires-marques.png'

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Nav>
        <a href="index.html">
          <Styled.Logo src={imageThamires} alt="logo"></Styled.Logo>
        </a>
        <Styled.Menu>
          <li>
            <Styled.NavMenu href='#Home'>
              <AiOutlineHome /> Home
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#about">
              <RiContactsLine /> Sobre
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#habilidades">
              <CgLoadbarDoc /> Habilidades
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#contato">
              <BsImages /> Projetos
            </Styled.NavMenu>
          </li>
          <li>
            <Styled.NavMenu href="#contato">
              <BiMessageAltDetail /> Contato
            </Styled.NavMenu>
          </li>
        </Styled.Menu>
      </Styled.Nav>
    </Styled.Header>
  );
};


