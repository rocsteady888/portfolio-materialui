import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from './common/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  personalHeadline: {
    textAlign: 'center'
  },
  headlineGrid: {
    marginTop: 50,
    marginBottom: 50,
  }
};


function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Ryan O'Connor
          </Typography>
          <Button color="inherit" target="_blank" href="https://github.com/rocsteady888">Github</Button>
          <Button color="inherit" target="_blank" href="https://www.linkedin.com/in/ryanoconnor285/">LinkedIn</Button>
          <Menu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);