import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "20vh",

    bottom: "0",
    zIndex: "5",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#050f2c",
    // theme.palette.type === "light"
    //   ? theme.palette.grey[500]
    //   : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: "#2DDDff" }}
        >
          SARIN MOTORS
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
          style={{ color: "#2DDDff" }}
        >
          RIDE YOUR DREAM
        </Typography>
      </footer>
    </div>
  );
}
