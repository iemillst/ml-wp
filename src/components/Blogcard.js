import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
})

function Blogcard(props) {
  const { classes } = props

  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressPost(limit: 3) {
            edges {
              node {
                title
                excerpt
                slug
                date(formatString: "MMMM DD, YYYY")
                featured_media_url
              }
            }
          }
        }
      `}
      render={data => (
        <div className={classes.root}>
          <h4>My latest blog entries...</h4>
          <GridList className={classes.gridList} cols={3}>
            {data.allWordpressPost.edges.map(({ node }) => (
              <GridListTile key={node.slug}>
                <img src={node.featured_media_url} alt={node.title} />
                <GridListTileBar
                  title=<span
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />
                  subtitle={
                    <span dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  }
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
                    <IconButton>
                      <StarBorderIcon className={classes.title} />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    />
  )
}

Blogcard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Blogcard)
