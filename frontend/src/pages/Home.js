import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Box, Container, Stack, useTheme } from "@mui/system";

const Home = () => {
    const { palette } = useTheme();
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