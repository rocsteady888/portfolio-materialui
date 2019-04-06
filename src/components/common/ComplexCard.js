import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button'
import githubLogo from '../../images/githubLogo.png'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class ComplexCard extends React.Component {
  state = { expanded: false };
  

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.title}
          subheader={this.props.date}
        />
        {
          this.props.image1
          ?
          <CardMedia
            className={classes.media}
            image={this.props.image1}
            title={this.props.title}
          />
          :
          null
        }
        <CardContent>
          {
            this.props.deployedURL
            ?
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={this.props.deployedURL}
              className={classes.button}
            >
              Go to {this.props.title}
            </Button>
            : 
            null
          }

          <Typography component="p">
            {this.props.headline}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          {
            this.props.githubURL
            ?
            <IconButton 
            aria-label="github link" 
            target="_blank" 
              href={this.props.githubURL}
            >
              <img src={githubLogo} alt="github logo" />
            </IconButton>
            :
            null
          }
          <Tooltip title="Details" placement="top-start">
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {this.props.paragraph1}
            </Typography>
            <Typography paragraph>
              {this.props.paragraph2}
            </Typography>
            <Typography paragraph>
              {this.props.paragraph3}
            </Typography>
            <Typography paragraph>
              {this.props.paragraph4}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ComplexCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexCard);