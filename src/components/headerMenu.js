import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'gatsby'

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state

    return (
      <div>
        <IconButton
          onClick={this.handleClick}
          style={{
            color: 'inherit',
            ariaLabel: 'Menu',
            marginLeft: -12,
            marginRight: 20,
          }}
        >
          <MenuIcon
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
          />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/about/">About</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/blog/">Blog</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to="/Contact/">Contact</Link>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu
