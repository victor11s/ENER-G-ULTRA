import React from 'react'

import { Nav, NavLink, Bars, NavMenu, NavBtn,NavBtnLink} from './NavComponent'

const NavBar = () => {
  return (
    <>
    <Nav>
        <NavLink to='/'>
            <h1>Logo</h1>
            {/*Para el logo */}
            {/* <img src='' alt=''/>*/}
        </NavLink>
        <Bars/>
        <NavMenu>
        <NavLink to='/catalogo' activeStyle>Catálogo</NavLink>
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