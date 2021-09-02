import React from "react";
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return (
    <Alert style={{ margin: "30px 0", padding: "10px 20px" }} variant={variant}>
      {children}
    </Alert>
  );
};
Message.defaultProps = {
  variant: "info",
};

export default Message;
