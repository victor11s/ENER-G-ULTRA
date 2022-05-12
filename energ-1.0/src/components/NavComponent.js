import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



// le da estilo a la navbar
export const Nav = styled.nav`
background: rgb(93,92,94);
background: linear-gradient(0deg, rgba(93,92,94,1) 5%, rgba(122,12,28,1) 63%);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const PageContainer = styled.div`
position: relative;
min-height: 100vh;
`;

/* Footer height */
export const ContentWrap = styled.div`
padding-bottom: 2.5rem;    
`;


// Estilos del Footer
//fixed para que se ponga abajo
 export const FooterBottom = styled.nav`
 position: relative;
  height: 80px;
  width: 100%;
  bottom: 0px;
  background: rgb(93,92,94);
  background: linear-gradient(0deg, rgba(93,92,94,1) 5%, rgba(122,12,28,1) 63%);

  
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;


//Estilos del Link 
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #FFF;
  }
`;
// estilos de la barra al contraerse
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


// estilos de los posibles menus del navbar
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//Estilo de un boton para la navBar
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


//Estilo de un boton con link
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #87868A;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;