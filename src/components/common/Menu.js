import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import resumePDF from '../../documents/Ryan O’Connor-pdf.pdf';
import resumeWord from '../../documents/Ryan O’Connor-word.docx';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Resume
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Button fullWidth color="inherit" target="_blank" href={resumePDF}>Open New Tab</Button>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Button fullWidth color="inherit" href={resumePDF}>Download .pdf</Button>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Button fullWidth color="inherit" href={resumeWord}>Download .docx</Button>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;