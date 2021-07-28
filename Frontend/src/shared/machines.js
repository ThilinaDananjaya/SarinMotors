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

export default function MachineCard() {
  const classes = useStyles();

  //machines

  const [machines, setMachines] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/machines/")
      .then((res) => setMachines(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <React.Fragment>
      <CssBaseline />

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {!machines.length ? (
            <div className={classes.root}>
              <LinearProgress color="primary" />
            </div>
          ) : (
            machines.map((machine, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image={process.env.PUBLIC_URL + `/agents/${agent.agentImage}`}
                    image={`/machines/${machine.vehicleImage}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/machine/${machine._id}`}
                      >
                        {machine.modelName}
                      </Link>
                    </Typography>

                    <Typography gutterBottom variant="h6" component="h6">
                      Company : {machine.company}
                    </Typography>
                    <Typography>Capacity : {machine.capacity}</Typography>
                    <Typography>FuelType : {machine.fueltype}</Typography>
                    <Typography>Serial Number : {machine.seats}</Typography>
                    <Typography>Run Time : {machine.year}</Typography>
                    <Typography>
                      Exterior Color : {machine.exteriorColor}
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
