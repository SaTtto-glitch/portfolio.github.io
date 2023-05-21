import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


const Skills: React.FC = () => {

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} sx={{
            large: {
                width: 730,
                maxWidth: '100%',
            },
          }}>
          <Typography variant='h5' >
            Skills
          </Typography>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card>
            <CardContent>
              <Typography variant="h6">
                言語
              </Typography>
              <Typography color="textSecondary">
                HTML / CSS / JavaScript / TypeScript
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                フレームワーク
              </Typography>
              <Typography color="textSecondary">
                React
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default Skills;