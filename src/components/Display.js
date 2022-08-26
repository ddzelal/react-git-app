import React from "react";
// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Display.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Display({ user }) {
  console.log(user);
  return (
    <Box className="display-container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={5}>
          <Item className="nesto">
            <img src={user.avatar_url} />
          </Item>
        </Grid>
        <Grid xs={2}>
          <Item>User:{user.login}</Item>
        </Grid>
        <Grid xs={2}>
          <Item>User id:{user.id}</Item>
        </Grid>
        <Grid xs={5}>
          <Item>{user.bio}</Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}
