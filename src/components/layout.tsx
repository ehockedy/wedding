/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import { Link } from 'gatsby'
import flowers from '../images/flowers.png'

type NavLinkProps = {
  to: string; // page to navigate to
  title: string;
}

const NavLink = ({ to, title }: NavLinkProps) => {
  return <Link to={to} sx={{ mx: 3 }}>
    {title}
  </Link>
}

// https://www.pngaaa.com/detail/111349
const FlowerGraphic = ({ flipX }: {flipX?: boolean}) => <img sx={{ width: '200px', transform: flipX ? 'scale(-1)' : 'scaleY(-1)' } } src={flowers} />

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
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <FlowerGraphic />
        <h1 sx={{ fontFamily: 'heading', display: 'flex', alignItems: 'center' }}>Rosie and Ed</h1>
        <FlowerGraphic flipX/>
      </div>

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
