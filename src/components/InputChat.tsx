import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { Send } from "@mui/icons-material";
export const InputChat = () => {
    const [message, setMessage] = useState<string>("");
    const handleSubmitMessage = () => {
        console.log(message);
    };
    return (
        <Box padding={2}>
            <TextField
                sx={{ bgcolor: "#D9D9D9" }}
                hiddenLabel
                variant="outlined"
                placeholder="Enter message"
                fullWidth
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                InputProps={{
                    endAdornment: (
                        <IconButton
                            color="primary"
                            onClick={handleSubmitMessage}
                            edge="end"
                            disabled={!message.trim()}
                        >
                            <Send />
                        </IconButton>
                    ),
                }}
            />
        </Box>
    );
};
