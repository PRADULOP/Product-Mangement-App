import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{backgroundColor:'black'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prodify
          </Typography>
          <Link to={'/'}><Button style={{color:"white"}}>Home</Button></Link>
          <Link to={'/add-product'}><Button style={{color:"white"}}>AddProduct</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default Navbar