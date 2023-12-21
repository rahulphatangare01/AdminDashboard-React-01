import React from 'react'
import {Box} from '@mui/material';
import Header from '../../components/Header';
import GeographyChart from '../../components/GeographyChart';
import { token } from '../../theme';
import { useTheme } from "@mui/material";
function Geography() {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
  return (
   <Box m='20px'>
    <Header title='GEOGRAPHY CHART' subtitle='Simple Geography Chart'/>
    <Box height='75vh' border={`1px solid ${colors.grey[100]}`} borderRadius={'4px'} >
        <GeographyChart/>
    </Box>

   </Box>
  )
}

export default Geography