import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Swal from "sweetalert2";
import axios from "axios";
import CreateSales from "./create-sale.component";
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

export default function SaleCard() {
  const classes = useStyles();

  //delete order
  const [sale, setSale] = useState([]);

  const deleteSale = (id) => {
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
          .delete(`http://localhost:5001/sales/${id}`)
          .then((res) => console.log(res.data));
        setSale(sale.filter((elem) => elem._id !== id));

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/sales/")
      .then((res) => setSales(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />

      <div
        className={classes.heroContent}
        style={{ backgroundColor: "#050f2c" }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
            style={{ color: "#2DDDff" }}
          >
            Sales
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
                  ADD SALES
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
                              ADD SALES
                            </h4>
                          </div>
                          <div className="col-12">
                            <CreateSales />
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
          {!sales.length ? (
            <div className={classes.root}>
              <LinearProgress color="primary" />
            </div>
          ) : (
            sales.map((sale, key) => (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Sale Num : {sale.saleNo}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="container">
                    <form encType="multipart/form-data">
                      <div className="form-row">
                        <div className="row">
                          <div className="col-6 mb-3">
                            <label>Sale Number </label>
                            <input
                              disabled
                              placeholder={sale.saleNo}
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="col-6 mb-3">
                            <label>Date: </label>
                            <input
                              disabled
                              placeholder={sale.date}
                              type="text"
                              className="form-control"
                            />
                            <div></div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group ">
                        <div className="row">
                          <div className="col-6 mb-3">
                            <label htmlFor="pay" className="">
                              Payment
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <div className="input-group-text">Rs.</div>
                              </div>
                              <input
                                type="text"
                                disabled
                                placeholder={sale.payment}
                                id="pay"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-6 mb-3">
                            <label htmlFor="insurancepay" className="">
                              Luxury Taxes
                            </label>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <div className="input-group-text">Rs.</div>
                              </div>
                              <input
                                type="text"
                                id="insurancepay"
                                className="form-control"
                                placeholder={sale.luxuryTaxes}
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-group col-6 mb-3">
                        <label>Manager </label>
                        <div className="input-group">
                          <input
                            type="text"
                            id="agentpay"
                            className="form-control"
                            disabled
                            placeholder={sale.user}
                          />
                        </div>
                      </div>

                      <div className="form-group col-6 mb-3">
                        <label>Customer </label>
                        <div className="input-group">
                          <input
                            type="text"
                            id="agentpay"
                            className="form-control"
                            disabled
                            placeholder={sale.customer}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <label>MTA6 Application Form</label>
                        </div>
                        {/* <div className="col-6">
                          <label>MTA8 Application Form</label>
                        </div> */}
                      </div>

                      <div className="row">
                        <div className="col-6 mb-3">
                          <Link to={`/sale/${sale._id}`}>
                            <img
                              src={`/sales/${sale.MTA}`}
                              alt="MTA6"
                              className="img-fluid"
                            ></img>
                          </Link>
                        </div>
                        {/* <div className="col-6 mb-3">
                          <img
                            src="/images/mta8.png"
                            alt="MTA8"
                            className="img-fluid"
                          ></img>
                        </div> */}
                      </div>
                      {/* <div className="row">
                        <div className="col-6">
                          <label>MTA6 Application Form</label>
                        </div>
                        <div className="col-6">
                          <label>Marriage Certificate</label>
                        </div>
                      </div> */}

                      <div className="form-group">
                        <div className="row"></div>
                        {/* <div className="row col-6">
                          <img
                            src="/images/car-sales-receipt.png"
                            alt="loc"
                            className="img-fluid"
                          ></img>
                        </div> */}
                      </div>

                      <br></br>

                      <div className="form-group mb-3">
                        <input
                          onClick={() => deleteSale(sale._id)}
                          value="Delete Sale"
                          className="btn btn-warning"
                        />
                      </div>
                    </form>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
