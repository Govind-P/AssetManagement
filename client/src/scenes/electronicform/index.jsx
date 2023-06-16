import { TextField, Button } from "@mui/material";

import React from "react";

function MyForm() {
  return (
    <form>
      {<TextField label="Name" variant="outlined" />}
      {
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      }
    </form>
  );
}

export default MyForm;
