import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

//shorcut rafce

const AuctionSheet = (props) => {
  const [filename, setFilename] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5001/orders/${props.match.params.id}`)
      .then((res) => [setFilename(res.data.auctionSheet)])
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <div>
      <div className="card w-75">
        {!filename ? (
          <CircularProgress color="secondary" />
        ) : (
          <>
            <img src={`/orders/${filename}`} alt="pic"></img>

            <br></br>
            <Link to="/agents" type="submit" className="btn btn-primary">
              Back to the Agents
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuctionSheet;
