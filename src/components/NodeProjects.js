import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ComplexCard from './common/ComplexCard';
import Grid from '@material-ui/core/Grid';
import bamazon1 from '../images/Bamazon/bamazon1.png';
import drwho1 from '../images/WhosWho/drwho1.png';

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

function NodeProjects(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6} md={4}>
          <ComplexCard
            title={"Bamazon"}
            image1={bamazon1}
            date={"May 10, 2018"}
            githubURL={"https://github.com/rocsteady888/bamazon"}
            headline={"Node CLI application with an Express sever and a MYSQL database. No frontend."}
            paragraph1={"The database stores each item with it's category, price and quantity."}
            paragraph2={"The user is able to use the arrow keys to navigate the menu and select and item and the quantity."}
            paragraph3={"The server returns the appropriate response or errors and then updates the database."}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ComplexCard
            title={"Who's Who of Dr. Who"}
            image1={drwho1}
            date={"June 12, 2018"}
            githubURL={"https://github.com/rocsteady888/interview-project2"}
            headline={"Node CLI application with an Express sever and a MYSQL database. No frontend."}
            paragraph1={"The database stores character information."}
            paragraph2={"The user is able to create, edit and delete from the list."}
            paragraph3={"The server returns the new table with the updated character info."}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        </Grid>
      </Grid>
    </div>
  );
}

NodeProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NodeProjects);