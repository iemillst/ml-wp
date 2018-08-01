import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Hidden } from '../../node_modules/@material-ui/core'
import SimpleMenu from './headerMenu'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}
/*
function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            x
          </Typography>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
*/

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
