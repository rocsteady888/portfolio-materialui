import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ComplexCard from './common/ComplexCard';
import Grid from '@material-ui/core/Grid';
import gifTastic from '../images/gifTastic1.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function JSProjects(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>
          <ComplexCard
              title={"GifTastic"}
              image1={gifTastic}
              subheader={"Find gif's of your favorite animals"}
              deployedURL={"https://rocsteady888.github.io/GifTastic/"}
              githubURL={"https://github.com/rocsteady888/GifTastic"}
              headline={"Javascript, jQuery, HTML, CSS, materialize, Giphy API, RESTful API calls with Ajax"}
              paragraph1={"This is an application that allows a user to find gifs of their favorite animals from a list.  The user can also add their animals to the list."}
              paragraph2={null}
              paragraph3={null}
              paragraph4={null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
      </Grid>
    </div>
  );
}

JSProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JSProjects);