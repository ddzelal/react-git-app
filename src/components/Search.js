import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { convertLength } from "@mui/material/styles/cssUtils";

export default function Search({ inputRef, changeUser, setFetch }) {
  function inputSearch() {
    console.log(inputRef);
    let users = inputRef.current.value;
    setFetch(users);
    inputRef.current.value = "";
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "95ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        inputRef={inputRef}
        placeholder="Search User"
        id="outlined-basic"
        label="SearchUser"
        variant="outlined"
      />
      <Stack spacing={2} direction="row">
        <Button onClick={() => inputSearch(inputRef)} variant="text">
          Click
        </Button>
      </Stack>
    </Box>
  );
}
