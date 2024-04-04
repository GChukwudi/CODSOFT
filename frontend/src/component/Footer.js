import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                height: '70px',
                bgcolor: palette.secondary.lightGreen,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box component='span' sx={{ color: palette.primary.bgcolor }}>All rights reserved! 2023.</Box>

            </Box>
        </>
    )
}

export default Footer