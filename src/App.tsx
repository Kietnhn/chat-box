import React from "react";
import "./App.css";
import { Box, Container, Stack, Typography } from "@mui/material";
import { InputChat } from "./components/InputChat";

function App() {
    return (
        <Container>
            <Box sx={{ bgcolor: "#618360" }}>
                <Stack
                    direction={"column"}
                    justifyContent={"space-between"}
                    height={"100vh"}
                >
                    <Stack
                        alignItems={"center"}
                        justifyContent={"center"}
                        padding={2}
                    >
                        <Box
                            bgcolor={"#D9D9D9"}
                            color={"black"}
                            paddingX={3}
                            paddingY={1}
                            borderRadius={9999}
                        >
                            <Typography variant="h4">Chat</Typography>
                        </Box>
                    </Stack>

                    <InputChat />
                </Stack>
            </Box>
        </Container>
    );
}

export default App;
