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
import CreateCustomer from "./create-customer.component";
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

export default function CustomerCard() {
  const classes = useStyles();

  //delete agent
  const [customer, setCustomer] = useState([]);

  const deleteCustomer = (id) => {
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
          .delete(`http://localhost:5001/customers/${id}`)
          .then((res) => console.log(res.data));
        setCustomer(customer.filter((elem) => elem._id !== id));

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/customers/")
      .then((res) => setCustomers(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.heroContent} style={{backgroundColor:"#050f2c"}}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            style={{color:"#2DDDff"}}
          >
            Customers
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
                  ADD CUSTOMER
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
                              ADD CUSTOMER
                            </h4>
                          </div>
                          <div className="col-9">
                            <CreateCustomer />
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
          {!customers.length ? (
            <div className={classes.root}>
              <LinearProgress color="primary" />
            </div>
          ) : (
            customers.map((customer, key) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image={process.env.PUBLIC_URL + `/agents/${agent.agentImage}`}
                    image={`/customers/${customer.customerImage}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`/customer/${customer._id}`}
                      >
                        {customer.username}
                      </Link>
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                      {customer.email}
                    </Typography>
                    <Typography>{customer.mobile}</Typography>
                    <Typography>{customer.password}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      to={`/update/${customer._id}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                    <Button
                      onClick={() => deleteCustomer(customer._id)}
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
