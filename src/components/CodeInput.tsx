import React from 'react';
import { TextField } from '@mui/material';

const CodeInput = ({ code, setCode }) => (
  <TextField
    label="Paste Code Snippet"
    multiline
    rows={10}
    fullWidth
    margin="normal"
    value={code}
    onChange={(e) => setCode(e.target.value)}
    placeholder="Paste your code here..."
    variant="outlined"
  />
);

export default CodeInput;
