import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const LanguageSelector = ({ language, setLanguage }) => (
  <FormControl fullWidth margin="normal">
    <InputLabel>Language</InputLabel>
    <Select
      value={language}
      label="Language"
      onChange={(e) => setLanguage(e.target.value)}
    >
      <MenuItem value="python">Python</MenuItem>
      <MenuItem value="java">Java</MenuItem>
      <MenuItem value="csharp">C#</MenuItem>
    </Select>
  </FormControl>
);

export default LanguageSelector;