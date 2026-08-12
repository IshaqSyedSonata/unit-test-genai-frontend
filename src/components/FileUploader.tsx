import React, { ChangeEvent } from 'react';
import { Button } from '@mui/material';

interface FileUploaderProps {
  setCode: (code: string) => void;
}

const FileUploader = ({ setCode }: FileUploaderProps) => {
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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
