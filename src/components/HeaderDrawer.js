import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import { IconButton } from '../../node_modules/@material-ui/core'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

class HeaderDrawer extends React.Component {
  state = {
    right: false,
  }

  toggleDrawer = open => () => {
    this.setState({
      right: open,
    })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.root}>
        <List component="nav">
          <ListItem button component="a" href="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/about/">
            <ListItemText primary="About" />
          </ListItem>

          <ListItem button component="a" href="/blog/">
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button component="a" href="/contact/">
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </div>
    )
    /*
    const fullList = (
      <div className={classes.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    )
*/
    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer(true)}
          style={{
            color: 'inherit',
            ariaLabel: 'Menu',
            marginLeft: -12,
            marginRight: 20,
          }}
        >
          <MenuIcon aria-haspopup="true" />
        </IconButton>

        <Drawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

HeaderDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeaderDrawer)
