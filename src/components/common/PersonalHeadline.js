import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  personalHeadline: {
    textAlign: 'center'
  },
  headlineGrid: {
    marginTop: 50,
    marginBottom: 50,
  }
};
function PersonalHeader(props) {
  const { classes } = props;
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.headlineGrid}
        spacing={24}
      >
        <Grid item xs={12} sm={8}>
          <Typography color="inherit" className={classes.personalHeadline}>
            I am a fullstack software engineer with a passion for producing web applications that solve problems and users will fall in love with.
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}


PersonalHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalHeader);