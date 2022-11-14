import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'

import { Hamburger } from '../Hamburger/Hamburger.controller'
// prettier-ignore
import { HeaderBg, HeaderLoggedIn, HeaderLoggedOut, HeaderLogo, HeaderMenuItem, HeaderStyled } from "./Header.style";

type HeaderViewProps = {
  user?: PublicUser
  removeAuthUserCallback: () => void
}

export const HeaderView = ({ user, removeAuthUserCallback }: HeaderViewProps) => {
  return (
    <HeaderStyled>
      <HeaderBg>
        <img alt="bg" className="menu-top-left" src="/elements/menu-top.png" />
        <img alt="bg" className="menu-left" src="/elements/menu-left.png" />
        <img alt="bg" className="menu-bottom" src="/elements/menu-bottom.png" />
        <img alt="bg" className="menu-right" src="/elements/menu-right.png" />
        <img alt="bg" className="menu-top-right" src="/elements/menu-top.png" />
      </HeaderBg>

      <Hamburger />
      <Link to="/">
        <HeaderLogo alt="logo" src="/elements/logo.svg" />
      </Link>

      {user ? loggedInHeader({ user, removeAuthUserCallback }) : loggedOutHeader()}
    </HeaderStyled>
  )
}

function loggedOutHeader() {
  return (
    <HeaderLoggedOut>
      <Link to="/sign-up">
        <HeaderMenuItem>SIGN UP</HeaderMenuItem>
      </Link>
      <Link to="/login">
        <HeaderMenuItem>LOGIN</HeaderMenuItem>
      </Link>
    </HeaderLoggedOut>
  )
}

function loggedInHeader({ user, removeAuthUserCallback }: HeaderViewProps) {
  return (
    <HeaderLoggedIn>
      <Link to={`/user/${user?.username}`}>
        <HeaderMenuItem>{user?.username}</HeaderMenuItem>
      </Link>
      <Link
        to="/"
        onClick={() => {
          removeAuthUserCallback()
        }}
      >
        <HeaderMenuItem>LOGOUT</HeaderMenuItem>
      </Link>
    </HeaderLoggedIn>
  )
}

HeaderView.propTypes = {
  user: PropTypes.object,
  removeAuthUserCallback: PropTypes.func.isRequired,
}

HeaderView.defaultProps = {}
