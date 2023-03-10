import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
            
          <Button>
            ABOUT
          </Button>
          <Button color='inherit'>
            SKILLS
          </Button>
          <Button color='inherit'>
            Works
          </Button>
          <Button color='inherit'>
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;