import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Box, Card, Container, Stack, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { jobLoadAction } from "../redux/actions/jobAction";
import { useParams } from "react-router-dom";


const Home = () => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const { keyword, location } = useParams();


    const [page, setPage] = useState(1);
    const [cat, setCat] = React.useState('');

    useEffect(() => {
        dispatch(jobLoadAction(page, keyword, cat, location))
    }, [page, keyword, cat, location, dispatch])



    return (
        <>
        <Box sx={{ bgcolor: "fafafa", minHeight: "100vh" }}>

            <Navbar />
            <Header />
            <Container>
                <Stack 
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Box sx={{ flex:2, p:2 }}>
                        <Card sx={{ minWidth: 150, mb: 3, mt: 3, p: 2 }}>
                            <Box sx={{ pb: 2 }}>
                                <Typography component="h4" sx={{ color: palette.secondary.main, fontWeight: 600 }}>
                                    Job by Category
                                </Typography>
                            </Box>
                        </Card>
                    </Box>
                    <Box sx={{ flex:5, p:2 }}>

                    </Box>
                </Stack>
            </Container>
        </Box>
        </>
    );
}

export default Home;