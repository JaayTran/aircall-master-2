import React from "react";
import "../css/body.css";
import Activity from "../components/Activity.jsx";
import useCallFilters from "../hooks/useCallFilters.js";

export default function CallList(props) {
  const { filterByArchived, filterByNotArchived } = useCallFilters();
  let filteredCalls = props.state.calls;

  if (props.filter === "archived") {
    filteredCalls = filterByArchived(props.state.calls);
  } else {
    filteredCalls = filterByNotArchived(props.state.calls);
  }

  const parsedCalls = filteredCalls.map((call, index) => {
    return (
      <Activity
        key={index}
        {...call}
        state={props.state}
        setState={props.setState}
      />
    );
  });

  return parsedCalls;
}
