import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ComplexCard from './common/ComplexCard';
import Grid from '@material-ui/core/Grid';

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

function ReactProjects(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>
          <ComplexCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ComplexCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ComplexCard />
        </Grid>
      </Grid>
    </div>
  );
}

ReactProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReactProjects);