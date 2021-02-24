import React from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";

function App() {
  const { jobs, loading, error } = useFetchJobs();
  return (
    <div>
      <Container>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        <h1>{jobs.length}</h1>
      </Container>
    </div>
  );
}

export default App;
