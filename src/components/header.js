import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Hidden } from '../../node_modules/@material-ui/core'
import SimpleMenu from './headerMenu'

const Header = ({ siteTitle }) => (
  <div style={{ flexGrow: '1' }}>
    <CssBaseline />
    <AppBar
      style={{
        position: 'static',
        flexGrow: 1,
      }}
    >
      <Toolbar>
        <Hidden smUp>
          <SimpleMenu />
        </Hidden>
        <Typography
          display3
          style={{
            variant: 'title',
            color: 'inherit',
            flexGrow: 1,
          }}
        >
          {siteTitle}
        </Typography>
        <Hidden xsDown>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            activeClassName="active"
          >
            <Button color="inherit">Home</Button>
          </Link>
          <Link
            to="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            activeClassName="active"
          >
            <Button color="inherit">About</Button>
          </Link>
          <Link
            to="/blog"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            activeClassName="active"
          >
            <Button color="inherit">Blog</Button>
          </Link>
          <Link
            to="/contact"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
            activeClassName="active"
          >
            <Button color="inherit">Contact</Button>
          </Link>
        </Hidden>
      </Toolbar>
    </AppBar>
  </div>
)
Header.propTypes = {
  classes: PropTypes.object.isRequired,
}
export default Header
