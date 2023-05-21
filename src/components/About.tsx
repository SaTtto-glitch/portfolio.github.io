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
            私の名前は田中太郎です。<br />
            東京でWebエンジニアとして働いています。<br />
            好きな言語・フレームワークはTypeScriptとReactです。
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default About;