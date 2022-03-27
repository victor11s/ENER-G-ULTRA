import React from 'react'
import imgLogo from '../assets/img/Logo-Energultra.png'
import { Nav, NavLink, Bars, NavMenu, NavBtn,NavBtnLink} from './NavComponent'

const NavBar = () => {
  return (
    <>
    <Nav>
        <NavLink to='/'>
        <img src={imgLogo} alt=""  style={{width:75}} />
            {/*Para el logo */}
            {/* <img src='' alt=''/>*/}
        </NavLink>
        <Bars/>
        <NavMenu>
        <NavLink to='/catalogo' activeStyle>Cátalogo</NavLink>
        <NavLink to='/noticias' activeStyle>Noticias</NavLink>
        <NavLink to='/perfil' activeStyle>Perfil</NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Iniciar Sesión</NavBtnLink>
        </NavBtn>
    </Nav>
    </>
  )
}

export default NavBar