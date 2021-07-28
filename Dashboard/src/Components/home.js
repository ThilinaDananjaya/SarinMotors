import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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

//pdf
function createPDF(props) {
  // get elements of report data
  var report1 = document.getElementById("report1").innerHTML;

  var style = "<style>";
  style =
    style + "table {width: 100%;font: 17px Calibri;} body{font-size:12px}";
  style =
    style +
    "table, th, td {border: solid 1px #DDD;color: black ;border-collapse: collapse;";
  style = style + "padding: 2px 3px;text-align: center;}";
  style = style + "</style>";

  // CREATE A WINDOW OBJECT.
  var win = window.open("", "", "height=700,width=700");

  win.document.write("<title>Report 1</title>"); // <title> FOR PDF HEADER.
  win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
  win.document.write("</head>");
  win.document.write(report1);
  // THE TABLE CONTENTS INSIDE THE BODY TAG.
  win.document.write("</body></html>");

  win.document.close(); // CLOSE THE CURRENT WINDOW.

  win.print(); // PRINT THE CONTENTS.
}

const Home = () => {
  const classes = useStyles();

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
            SARIN MOTORS
          </Typography>
          {/* <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
            style={{ color: "#2DDDff" }}
          ></Typography> */}
          <div className={classes.heroButtons}></div>
        </Container>
      </div>

      <div className="container mt-5 mb-5" id="report1">
        <iframe
          width="1500"
          height="750"
          src="https://app.powerbi.com/reportEmbed?reportId=0c82c0a3-be7e-48e7-a87f-b932216c1a3d&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
          frameborder="0"
          allowFullScreen="true"
          style={{ marginLeft: "-100px" }}
        ></iframe>
        <button
          onClick={createPDF}
          style={{
            backgroundColor: "#050f2c",
            color: "#2DDD98",
            fontSize: "20px",
            height: "50px",
            marginTop: "50px",
            marginLeft: "1100px",
          }}
        >
          Download Report
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
