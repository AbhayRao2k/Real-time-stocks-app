import React from 'react'
import NavItems from './NavItems'
import { UserDropdown } from './UserDropdown'

const Header = () => {
  return (
    <div>
      <NavItems />
      <UserDropdown />
    </div>

  )
}

export default Header