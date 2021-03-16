import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button, Container } from "@material-ui/core";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        onClick={() => console.log("You clicked the button")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
