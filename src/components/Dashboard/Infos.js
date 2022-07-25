import * as React from 'react';
import { Box, Card, CardActions, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import publishArticleImage from './Logo-length_v2.png';

const Infos = () => {
    return (
        <Card
            sx={{
                background: theme =>
                    theme.palette.mode === 'dark'
                        ? '#535353'
                        : '#FFFFFF',

                color: '#006E5E',
                padding: '20px',
                marginTop: 2,
                marginBottom: '1em',
            }}
        >
            <Box display="flex">
                <Box flex="1" >
                    <Typography variant="h5" component="h2" gutterBottom>
                        Bienvenu sur le dashboard de MédiMoi !
                    </Typography>
                    <Box maxWidth="40em">
                        <Typography
                            variant="body1"
                            component="p"
                            gutterBottom
                            sx={{
                                color: 'black'
                            }}
                        >
                            Vous pouvez gérer l'ensemble des données dans le BackOffice.
                        </Typography>
                    </Box>
                    <CardActions
                        sx={{
                            padding: { xs: 0, xl: null },
                            flexWrap: { xs: 'wrap', xl: null },
                            '& a': {
                                marginTop: { xs: '1em', xl: null },
                                marginLeft: { xs: '0!important', xl: null },
                                marginRight: { xs: '1em', xl: null },
                            },
                        }}
                    >
                        <Button
                            variant="contained"
                            href="https://localhost:3000"
                            target={"_blank"}
                            startIcon={<HomeIcon />}
                            sx={{
                                backgroundColor: '#006E5E'
                            }}
                        >
                            Accéder à l'application
                        </Button>
                        <Button
                            variant="contained"
                            href="http://localhost:4000/docs"
                            target={"_blank"}
                            startIcon={<CodeIcon />}
                            sx={{
                                backgroundColor: '#006E5E',
                                "& :hover": '#FA6C16'
                            }}
                        >
                            Accéder à la documentation API
                        </Button>
                    </CardActions>
                </Box>
                <Box
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    sx={{
                        background: `url(${publishArticleImage}) top right / cover`,
                        marginLeft: 'auto',
                    }}
                    width="20em"
                    // height="9em"
                    overflow="hidden"
                />
            </Box>
        </Card>
    );
};

export default Infos;