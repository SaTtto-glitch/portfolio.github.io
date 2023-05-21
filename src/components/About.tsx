import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='h5' >
            About
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Typography variant='body1' align='left'>
            SaTtto<br />
            三重県出身<br />
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;