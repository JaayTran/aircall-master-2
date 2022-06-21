import { useState, useEffect } from "react";
import axios from "axios";

export default function useCallData() {
  const [state, setState] = useState({
    calls: [],
    archived: [],
  });

  useEffect(() => {
    axios.get("https://aircall-job.herokuapp.com/activities").then((res) => {
      const calls = [...res.data];
      setState({ calls });
    });
  }, []);

  return { state, setState };
}
