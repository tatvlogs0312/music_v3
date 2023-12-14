import { Alert, Snackbar } from "@mui/material";
import React from "react";

function Notification({ msg, type }) {
  const [state, setState] = React.useState({
    open: true,
    vertical: "top",
    horizontal: "right",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
    >
      <Alert severity={type} sx={{ width: "100%" }} onClose={handleClose}>
        {msg}
      </Alert>
    </Snackbar>
  );
}

export default Notification;
