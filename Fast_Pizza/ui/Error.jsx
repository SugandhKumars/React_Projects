import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h3>Something Went Wrong</h3>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default Error;
