import { Fragment } from 'react'
import Header from './main-header'

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
