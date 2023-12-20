import React from 'react'
import {Box} from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';


function Pie() {
  return (
   <Box m='20px'>
    <Header title='PIE CHART' subtitle='Simple pie Chart'/>
    <Box height='75vh' >
        <PieChart/>
    </Box>

   </Box>
  )
}

export default Pie