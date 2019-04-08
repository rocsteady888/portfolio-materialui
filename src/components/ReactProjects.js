import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ComplexCard from './common/ComplexCard';
import Grid from '@material-ui/core/Grid';
import aion1 from '../images/Aion/aion1.png';
import aion2 from '../images/Aion/aion2.png';
import aion3 from '../images/Aion/aion3.jpeg';

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

class ReactProjects extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <ComplexCard
              title={"Aion"}
              image1={aion1}
              image2={aion2}
              image3={aion3}
              date={"March 31, 2019"}
              deployedURL={"https://aion-mern.herokuapp.com/"}
              githubURL={"https://github.com/rocsteady888/aion"}
              headline={"React/Redux, Responsive Mobile First Design, Material UI, Node JS, Express, Mongoose, RESTful API, Passport JS, Moment JS, "}
              paragraph1={"Full stack application using the MERN stack. React-Redux, Express, Mongoose, MongoDB.  This app solves a common issue for many companies with unusual work hours or self employed people. People that work 24 hour shifts, overnight shifts, or self employed people have few options for keeping track of the hours they have put in. Each user is authenticated with a Passport JS strategy that leverages JWT web tokens as bearer tokens stored in local storage in the header."}
              paragraph2={"The backend of this application stores data in a mongoDB with mongoose as the ODM.  There are 2 models, the User model which stores user data and the Shift model which stores clock in time and description as well as clock out time and description.  The user has the ability to edit or delete their shifts."}
              paragraph3={"The front end uses the React and Redux libraries which make is super quick and responsive.  Nested components in this application will easily be reused in further development.  The functionality of Redux is being replaced React Hooks in any new development.  The application is also styled with Material UI which helps make all the components familar to users."}
              paragraph4={"This application was designed to be used on mobile for clocking in and out on the go.  Then tables are available on desktop or tablet to make reviewing the time card easy."}
            />
          </Grid>
        </Grid>
      </div>
    );

  }
}

ReactProjects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReactProjects);