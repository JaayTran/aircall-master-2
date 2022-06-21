import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "../css/body.css";

export default function Activity(props) {
  const id = props.id;
  const isArchived = props.is_archived;
  const date = new Date(props.created_at);
  const parsedTime = date.toUTCString().slice(17, 25);
  const parsedDate = date.toUTCString().slice(0, 16);

  const archiveItem = () => {
    const newCalls = [];
    for (const call of props.state.calls) {
      if (call.id === id) {
        const newCall = { ...call, is_archived: !isArchived };
        newCalls.push(newCall);
      } else {
        newCalls.push(call);
      }
    }
    props.setState((prev) => ({ ...prev, calls: newCalls }));
    handlePOST(!isArchived);
  };

  const handlePOST = (archived) => {
    const url = "https://aircall-job.herokuapp.com/activities/" + id;
    axios.post(url, { is_archived: archived });
  };

  return (
    <Link className="activity" to={"/details/" + id}>
      <div className="card-header">
        <div>{props.from}</div>
        <div className="activity-item-right">{parsedDate}</div>
      </div>
      <div className="activity-item">
        <div className="activity-item-left">
          <div>
            {props.call_type === "answered" && (
              <div style={{ color: "green" }}>
                <i className="fas fa-phone-alt"></i>
              </div>
            )}
            {props.call_type === "missed" && (
              <div style={{ color: "red" }}>
                <i className="fas fa-phone-slash"></i>
              </div>
            )}
            {props.call_type === "voicemail" && (
              <div>
                <i className="fas fa-voicemail"></i>
              </div>
            )}
          </div>
          <div className="activity-item-inner">
            {props.call_type === "missed" && (
              <p className="card-subtitle">
                tried to call {props.to}
                <br /> via {props.via}
              </p>
            )}
            {props.call_type === "answered" && (
              <p className="card-subtitle">
                for {props.to}
                <br /> via {props.via}
              </p>
            )}
            {props.call_type === "voicemail" && (
              <p className="card-subtitle">
                voicemail for {props.to}
                <br /> via {props.via}
              </p>
            )}
          </div>
        </div>
        <div className="activity-item-right">
          {parsedTime}
          <div>
            <br />
            <button onClick={archiveItem} data-bs-toggle="dropdown">
              {!isArchived && "Archive"}
              {isArchived && "Unarchive"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
