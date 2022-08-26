import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';  
import { useRef } from 'react';


export default function BasicTextFields({ inputRef , changeUser }) {

  

    function inputSearch(){
        console.log(inputRef.current.value)
    }

   
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '95ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField inputRef={inputRef} placeholder='Search User' id="outlined-basic" label="SearchUser" variant="outlined" />
      <Stack spacing={2} direction="row">
      <Button onClick={() => inputSearch(inputRef)}  variant="text">Click</Button>
    </Stack>
    </Box>
  );
}