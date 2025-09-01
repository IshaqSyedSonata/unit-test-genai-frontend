import React from 'react';
import { Button } from '@mui/material';

const FileUploader = ({ setCode }) => {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const text = await file.text();
      setCode(text);
    }
  };

  return (
    <Button variant="contained" component="label" sx={{ marginBottom: 2 }}>
      Upload Code File
      <input
        type="file"
        hidden
        accept=".py,.java,.cs"
        onChange={handleFileUpload}
      />
    </Button>
  );
};

export default FileUploader;
