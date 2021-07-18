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
import CreateEmployee from "./create-user.component";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  //delete agent
  const [user, setUser] = useState([]);

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5001/users/${id}`)
          .then((res) => console.log(res.data));
        setUser(user.filter((elem) => elem._id !== id));

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

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

      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Employees
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            you can add, view, delete Employees from here.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item></Grid>
              <Grid item>
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalone"
                >
                  ADD EMPLOYEE
                </button>

                <div
                  className="modal fade bd-example-modal-lg"
                  id="exampleModalone"
                  tabIndex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-body">
                        <div className="container border border-primary rounded pb-5 pt-5 mt-2 mb-2">
                          <div>
                            <h4 className="bg-primary text-white p-2 mb-3">
                              ADD EMPLOYEE
                            </h4>
                          </div>
                          <div className="col-9">
                            <CreateEmployee />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {!users.length ? (
            <div className={classes.root}>
              <LinearProgress color="secondary" />
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
                  <CardActions>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                    <Button
                      onClick={() => deleteUser(user._id)}
                      size="small"
                      color="secondary"
                    >
                      delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
