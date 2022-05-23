import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            B<span className="hook">oo</span>kworm
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
