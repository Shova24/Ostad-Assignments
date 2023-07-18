import React from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = ({ variant, text }) => {
  return <Alert variant={variant}>{text}</Alert>;
};

export default AlertMessage;
