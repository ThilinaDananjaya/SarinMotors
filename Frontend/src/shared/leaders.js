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

export default function UserCard() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/users/")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {!users.length ? (
            <div className={classes.root}>
              <LinearProgress color="primary" />
            </div>
          ) : (
            users.map((user, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image={process.env.PUBLIC_URL + `/agents/${agent.agentImage}`}
                    image={`/users/${user.employeeImage}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/agent/${user._id}`}
                      >
                        {user.username}
                      </Link>
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                      {user.email}
                    </Typography>
                    <Typography>{user.mobile}</Typography>
                    <Typography>{user.address}</Typography>
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


// export const LEADERS = [
//   {
//     id: 0,
//     name: "Peter",
//     image: "/assets/images/Sample_User_Icon.png",
//     designation: "Chief Epicurious Officer",
//     abbr: "CEO",
//     featured: false,
//     description:
//       "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.",
//   },
//   {
//     id: 1,
//     name: "Danny",
//     image: "/assets/images/Sample_User_Icon.png",
//     designation: "Chief Food Officer",
//     abbr: "CFO",
//     featured: false,
//     description:
//       "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!",
//   },
//   {
//     id: 2,
//     name: "Tang",
//     image: "/assets/images/Sample_User_Icon.png",
//     designation: "Chief Taste Officer",
//     abbr: "CTO",
//     featured: false,
//     description:
//       "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.",
//   },
//   {
//     id: 3,
//     name: "Alberto",
//     image: "/assets/images/Sample_User_Icon.png",
//     designation: "Executive Chef",
//     abbr: "EC",
//     featured: true,
//     description:
//       "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!",
//   },
// ];
