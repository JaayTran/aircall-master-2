import React from "react";
import { useParams } from "react-router";

import "../css/body.css";

export default function ActivityDetails(props) {
  const { id } = useParams();

  const thisCall = props.state.calls.filter((call) => {
    return call.id == id;
  })[0];
  console.log(thisCall);

  const dateParser = {};

  if (thisCall) {
    dateParser.ready = true;
    dateParser.raw = new Date(thisCall.created_at);
    dateParser.parsedTime = dateParser.raw.toUTCString().slice(17, 25);
    dateParser.parsedDate = dateParser.raw.toUTCString().slice(0, 16);
  }

  return (
    <div className="container">
      <h1 className="call-id">Caller ID: {id}</h1>
      <div className="call-detail">
        <p>
          <strong>Date:</strong> {thisCall && dateParser.parsedDate}
        </p>
        <p>
          <strong>Time:</strong> {thisCall && dateParser.parsedTime}
        </p>
        <p>
          <strong>Direction:</strong> {thisCall && thisCall.direction}
        </p>
        <p>
          <strong>From:</strong> {thisCall && thisCall.from}
        </p>
        <p>
          <strong>To:</strong> {thisCall && thisCall.to}
        </p>
        <p>
          <strong>Via:</strong> {thisCall && thisCall.via}
        </p>
        <p>
          <strong>Duration:</strong> {thisCall && thisCall.duration}
        </p>
        <p>
          <strong>Archived:</strong>{" "}
          {thisCall && thisCall.is_archived ? "Yes" : "No"}
        </p>
        <p>
          <strong>Call Type:</strong> {thisCall && thisCall.call_type}
        </p>
      </div>
    </div>
  );
}
