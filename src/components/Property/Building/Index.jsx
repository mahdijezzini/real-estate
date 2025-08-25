import React from "react";
import { Container } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import BuildingData from "../../../data/building";

function Building() {
  return (
    <Container maxWidth="xl" sx={{ margin: "10px 0px 0px 0px" }}>
      <Grid spacing={7} container>
        {{ BuildingData } &&
          BuildingData.map((item) => {
            return (
              <Grid
                key={item.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2.4 }}
                // xs={12}
                // sm={6}
                // md={4}
                // lg={3}
                // xl={2.4}
                // item
                sx={{ width: "100%" }}
              >
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    component="img"
                    alt=""
                    height={160}
                    image={item.image}
                  />
                  <CardContent >
                    <Typography variant="h6" align="center">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" align="center" color="text.secondary">
                      {item.location}
                    </Typography>

                  </CardContent>
                  <CardActions  >
                    <Button
                      sx={{
                        textAlign: "bottom",
                        paddingBottom: "0px",
                        postion: "relative",
                        left: "0px",
                        marginBottom: "0px",
                        width: "100%"
                      }}
                    >
                      Location
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "12px",
                        positon: "relative",
                        right: "0px",
                        textTransform: "none",
                        width: "100%"
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}

export default Building;
