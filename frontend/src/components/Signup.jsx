import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
const navigate = useNavigate('')
    const handleSignup = async (event) => {
        event.preventDefault();
        try {
            // Send the user data to the backend
            const response = await axios.post("http://localhost:3008/api/post", {
                name,
                email,
                password
            });

            // If signup is successful
            setMessage('Signup successful!');
            navigate('/')
            setError('');
        } catch (err) {
            // Handle the error
            setError('Signup failed! Please try again.');
            setMessage('');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 3 }}>
                <Typography component="h1" variant="h5" align="center">
                    Signup
                </Typography>
                <form onSubmit={handleSignup}>
                    <Box mt={2} align="center">
                        {/* Name input */}
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {/* Email input */}
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* Password input */}
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
                        {/* Signup button */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2 }}
                        >
                            Signup
                        </Button>
                    </Box>
                </form>

                {/* Display success message */}
                {message && (
                    <Typography color="green" align="center" sx={{ mt: 2 }}>
                        {message}
                    </Typography>
                )}

                {/* Display error message */}
                {error && (
                    <Typography color="red" align="center" sx={{ mt: 2 }}>
                        {error}
                    </Typography>
                )}

                {/* Login link */}
                <Typography align="center" sx={{ mt: 2 }}>
                    Already have an account? <Link to="/Admin">Login</Link>
                </Typography>
            </Paper>
        </Container>
    );
};

export default Signup;
