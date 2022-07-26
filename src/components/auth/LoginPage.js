import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import {
    Avatar,
    Button,
    Card,
    CardActions,
    CircularProgress,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {
    Form,
    required,
    TextInput,
    useLogin,
    useNotify,
} from 'react-admin';

import Box from '@mui/material/Box';
import {Image} from "@mui/icons-material";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    const notify = useNotify();
    const login = useLogin();
    const location = useLocation();

    const handleSubmit = (auth) => {
        setLoading(true);
        login(
            auth,
            location.state ? (location.state).nextPathname : '/'
    ).catch((error) => {
            setLoading(false);
            notify(
                typeof error === 'string'
                    ? error
                    : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                {
                    type: 'warning',
                    messageArgs: {
                        _:
                            typeof error === 'string'
                                ? error
                                : error && error.message
                                    ? error.message
                                    : undefined,
                    },
                }
            );
        });
    };

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    background:
                        'url(/pexels-louis-bauer-249348.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <Card sx={{ minWidth: 300, marginTop: '6em' }}>
                    <Box
                        sx={{
                            margin: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            width: 400
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: 200,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="MédiMoi"
                            src="/Logo-length_v2.png"
                        />
                    </Box>

                    <Box
                        sx={{
                            marginTop: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            color: "#006E5E",
                        }}
                    >
                        Accès au BackOffice
                    </Box>
                    <Box sx={{ padding: '0 1em 1em 1em' }}>
                        <Box sx={{ marginTop: '1em' }}>
                            <TextInput
                                autoFocus
                                source="username"
                                type="email"
                                label={"Email"}
                                disabled={loading}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ marginTop: '1em' }}>
                            <TextInput
                                source="password"
                                label={"Mot de passe"}
                                type="password"
                                disabled={loading}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <CardActions sx={{ padding: '0 1em 1em 1em' }}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={loading}
                            fullWidth
                            sx={{
                                backgroundColor: "#006E5E",
                            }}
                        >
                            {loading && (
                                <CircularProgress size={25} thickness={2} />
                            )}
                            Se connecter
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Form>
    );
};

LoginPage.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

export default LoginPage;