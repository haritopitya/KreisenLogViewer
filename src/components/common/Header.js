import { css } from '@emotion/react';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark'>
                <NavLink to={'/'}>
                    <NavbarBrand css={css({ paddingLeft: 10 })}>
                        <img
                            alt='logo'
                            src='./images/logo_simple.png'
                            className='d-inline-block align-top'
                            height={'30vh'}
                        />
                        Kreisen Log Viewer
                    </NavbarBrand>
                </NavLink>
            </Navbar>
        </>
    )
}

export default Header
