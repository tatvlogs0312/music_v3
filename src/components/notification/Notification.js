import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Notification({ msg, type }) {
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "right",
  });

  const { vertical, horizontal, open } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      style={{
        width: "300px"
      }}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
