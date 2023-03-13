/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import { Link } from 'gatsby'

type NavLinkProps = {
  to: string; // page to navigate to
  title: string;
}

const NavLink = ({ to, title }: NavLinkProps) => {
  return <Link to={to} sx={{ mx: 3 }}>
    {title}
  </Link>
}

type LayoutProps = {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <nav sx={{ color: 'primary' }}>
        <NavLink to='/' title='Home'/>
        <NavLink to='/about' title='About'/>
      </nav>
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout
