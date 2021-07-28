import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import axios from "axios";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";

//materila ui things
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.success.light,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function VehicleCard() {
  const classes = useStyles();

  //delete agent
  const [vehicle, setVehicle] = useState([]);

  //veicles

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/vehicles/")
      .then((res) => setVehicles(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <React.Fragment>
      <CssBaseline />

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {!vehicles.length ? (
            <div className={classes.root}>
              <LinearProgress color="primary" />
            </div>
          ) : (
            vehicles.map((vehicle, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image={process.env.PUBLIC_URL + `/agents/${agent.agentImage}`}
                    image={`/vehicles/${vehicle.vehicleImage}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/vehicle/${vehicle._id}`}
                      >
                        {vehicle.modelName}
                      </Link>
                    </Typography>

                    <Typography gutterBottom variant="h6" component="h6">
                      Company : {vehicle.company}
                    </Typography>
                    <Typography>Engine : {vehicle.capacity}</Typography>
                    <Typography>FuelType : {vehicle.fueltype}</Typography>
                    <Typography>Seats : {vehicle.seats}</Typography>
                    <Typography>Body Style : {vehicle.bodyStyle}</Typography>

                    <Typography>Madeyear : {vehicle.year}</Typography>
                    <Typography>mileage : {vehicle.mileage}</Typography>
                    <Typography>
                      Exterior Color : {vehicle.exteriorColor}
                    </Typography>
                    <Typography>
                      Interior Color : {vehicle.interiorColor}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

// export const CARS = [
//   // {
//   //   id: 0,
//   //   name: "Item 01",
//   //   image: "/assets/carsaleimg/bmw.png",
//   //   make: "Toyota",
//   //   label: "Hot",
//   //   price: "$",
//   //   featured: true,
//   //   description:
//   //     "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
//   // },
//   // {
//   //   id: 1,
//   //   name: "Item 02",
//   //   image: "/assets/carsaleimg/2021-toyota-corolla-le-cvt-natl-angular-front-exterior-view_100754726_m.jpg",
//   //   make: "toyota",
//   //   label: "",
//   //   price: "$",
//   //   featured: false,
//   //   description:
//   //     "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
//   // },
//   // {
//   //   id: 2,
//   //   name: "Item 03",
//   //   image: "/assets/carsaleimg/wb97r_8_1(7a1).jpg",
//   //   make: "toyota",
//   //   label: "New",
//   //   price: "$",
//   //   featured: false,
//   //   description:
//   //     "A quintessential ConFusion experience, is it a vada or is it a donut?",
//   // },
//   // {
//   //   id: 3,
//   //   name: "Item 04",
//   //   image: "/assets/carsaleimg/wb97r_8_1(7a1).jpg",
//   //   make: "Toyota",
//   //   label: "",
//   //   price: "$",
//   //   featured: false,
//   //   description:
//   //     "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms",
//   // },
// ];
