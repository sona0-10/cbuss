
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => { // Changed from handleSignup to handleLogin
        event.preventDefault();
        try {
            // Send the user data to the backend
            const response = await axios.post("http://localhost:3008/api/login", {
                name,
                password
            });

        setMessage('Login successful!');
            navigate('/home');
        } catch (err) {
            // Handle the error
            setMessage('Login failed! Please try again.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography component="h1" variant="h5" align="center">
                    Login
                </Typography>
                <form onSubmit={handleLogin}>
                    <Box mt={2} align="center">
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            margin="normal"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </form>
                {message && (
                    <Typography color={message.startsWith('Login') ? 'green' : 'red'} align="center" sx={{ mt: 2 }}>
                        {message}
                    </Typography>
                )}
                <Typography align="center" sx={{ mt: 2 }}>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Login;
