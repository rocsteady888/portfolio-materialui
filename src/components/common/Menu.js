import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import resumePDF from '../../documents/Ryan O’Connor-pdf.pdf';
import resumeWord from '../../documents/Ryan O’Connor-word.docx';

function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClick={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Button fullWidth color="inherit" target="_blank" href={resumePDF}>Open New Tab</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button fullWidth color="inherit" href={resumePDF}>Download pdf</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button fullWidth color="inherit" href={resumeWord}>Download docx</Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu;


