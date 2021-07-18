import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

//shorcut rafce

const AgentSingle = (props) => {
  const [agentId, setAgentId] = useState("");
  const [agentName, setAgentName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  //  const [filename,setFilename]=useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5001/agents/${props.match.params.id}`)
      .then((res) => [
        setAgentId(res.data.agentId),
        setAgentName(res.data.agentName),
        setEmail(res.data.email),
        setMobile(res.data.mobile),
        setCompany(res.data.company),
        //    setFilename(res.data.setFilename)
      ])
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <div>
      <div className="card w-75">
        {!agentName ? (
          <CircularProgress color="secondary" />
        ) : (
          <>
            <h2>{agentName}</h2>
            <h4 className="badge badge-secondary">{agentId}</h4>
            <p>{email}</p>
            <p>{mobile}</p>
            <p>{agentId}</p>
            <p>{company}</p>

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

export default AgentSingle;
