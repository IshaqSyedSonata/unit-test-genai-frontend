import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

type Language = 'python' | 'java' | 'csharp';

interface LanguageSelectorProps {
  language: Language | string;
  setLanguage: (language: string) => void;
}

const LanguageSelector = ({ language, setLanguage }: LanguageSelectorProps) => (
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
      <MenuItem value="csharp">Node</MenuItem>
    </Select>
  </FormControl>
);

export default LanguageSelector;
