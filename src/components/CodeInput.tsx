import React from 'react';
import { TextField } from '@mui/material';

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
}

const CodeInput = ({ code, setCode }: CodeInputProps) => (
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
