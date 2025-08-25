import React from 'react';
import House from './House/Index'
import Apartment from './Apartment/Index';
import Land from './Land/Index';
import Building from './Building/Index';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import './Index.scss';


function Property() {
    return (
        <div id='page' style={{ margin: "40px auto" }}>

            <Container maxWidth='xl'>
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '8px 0px 20px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >

                    <Typography
                        variant="h4"
                        align="center"
                        className="heading"
                        maxWidth="md"
                        sx={{
                            margin: "0px auto 40px auto",
                            background: "#4774AE",
                            borderRadius: "26px",
                            padding: "8px 60px",
                            borderBottom: "20px solid #434460",
                            color: "#E7ECEF",
                        }}
                    >
                        Houses
                    </Typography>
                    <House />

                </Container>
                <Container
                    maxWidth="xl"
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #D3DEEE',
                        margin: '40px auto',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        className="heading"
                        maxWidth="md"
                        sx={{
                            margin: "0px auto 40px auto",
                            background: "#4774AE",
                            borderRadius: "26px",
                            padding: "8px 60px",
                            borderBottom: "20px solid #434460",
                            color: "#E7ECEF",
                        }}
                    >
                        Apartments
                    </Typography>
                    <Apartment />
                </Container>

                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant="h4"
                        align="center"
                        className="heading"
                        maxWidth="md"
                        sx={{
                            margin: "0px auto 40px auto",
                            background: "#4774AE",
                            borderRadius: "26px",
                            padding: "8px 60px",
                            borderBottom: "20px solid #434460",
                            color: "#E7ECEF",
                        }}
                    >
                        Lands
                    </Typography>
                    <Land />

                </Container>
                <Container
                    maxWidth='xl'
                    sx={{
                        background: '#D3DEEE',
                        borderRadius: '5px',
                        border: '1px solid #fffff',
                        margin: '40px 0px',
                        padding: '10px 0px 20px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                    <Typography
                        variant="h4"
                        align="center"
                        className="heading"
                        maxWidth="md"
                        sx={{
                            margin: "0px auto 40px auto",
                            background: "#4774AE",
                            borderRadius: "26px",
                            padding: "8px 60px",
                            borderBottom: "20px solid #434460",
                            color: "#E7ECEF",
                        }}
                    >
                        Buildings
                    </Typography>
                    <Building />

                </Container>
            </Container>

            {/* <Footer /> */}

        </div>
    )
}

export default Property;
