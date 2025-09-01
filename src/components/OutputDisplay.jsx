import React from 'react';
import { Typography, Paper } from '@mui/material';

const OutputDisplay = ({ output }) => (
  <div style={{ marginTop: '2rem' }}>
    <Typography variant="h6">Generated Unit Test Cases:</Typography>
    <Paper elevation={3} sx={{ padding: 2, marginTop: 1, whiteSpace: 'pre-wrap' }}>
      {output || 'No output yet.'}
    </Paper>
  </div>
);

export default OutputDisplay;
