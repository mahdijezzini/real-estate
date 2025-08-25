import {
  Box,
  Card,
  Grid,
  CardMedia,
  Typography,
  CardHeader,
  Avatar,
  CardActions,
  Button,
} from "@mui/material";
import {
  createTheme,
} from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ClientData from "../../../data/Client";

export default function Client() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xxs: 0, // Removed custom breakpoint as it's not standard for core Grid
        xs: 0, // xs starts from 0 by default in MUI
        sm: 630,
        md: 860,
        lg: 1040,
        xl: 1536,
      },
    },
    palette: {
      primary: purple,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box paddingBottom={"20px"}>
        <Grid paddingTop={"12px"} container columnSpacing={4} maxWidth={"xl"}>
          {ClientData &&
            ClientData.map((client) => {
              return (
                <Grid
                  sx={{
                    height: "300px",
                  }}
                  key={client.id}
                  // xxs={6} // Removed xxs prop
                  // xs={6} // Adjusted xs to take 6 columns on extra small screens
                  // sm={4}
                  // md={3}
                  // lg={2.4}
                  // xl={1.5} // Adjusted xl to take 1.5 columns (12/8)
                  size={{ xxs: 6, xs: 6, sm: 4, md: 3, lg: 2.4, xl: 1.5 }}
                >
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar
                          sx={{
                            bgcolor: "#ff2322",
                          }}
                          src={client.image}
                        />
                      }
                      title={
                        <Typography variant="p" component="h5">
                          {client.name}
                        </Typography>
                      }
                    />
                    <CardMedia
                      height="120"
                      sx={{
                        padding: "3px 10px",
                      }}
                    >
                      <Typography variant="p">{client.review}</Typography>
                    </CardMedia>
                    <CardActions
                      sx={{
                        padding: "0px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        sx={{
                          textTransform: "none",
                          fontSize: "13px",
                          margin: "0px,",
                        }}
                      >
                        <Typography variant="span">History</Typography>
                      </Button>
                      <Button
                        sx={{
                          textTransform: "none",
                          fontSize: "12px",
                          margin: "0px",
                        }}
                      >
                        <Typography variant="span">More</Typography>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

