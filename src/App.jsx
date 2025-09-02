import React, { useState } from 'react';
import { Container, Typography, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import CodeInput from './components/CodeInput';
import FileUploader from './components/FileUploader';
import OutputDisplay from './components/OutputDisplay';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [output, setOutput] = useState('');
  const [apiType, setApiType] = useState('paid');

//   $body = '{ "code": "def add(a, b): return a + b", "language": "python" }'
// $headers = @{ "Content-Type" = "application/json" }
// $response = Invoke-WebRequest -Uri "http://localhost:3000/generate-tests" -Method POST -Headers $headers -Body $body
// Write-Output $response.Content

  const handleGenerate = async () => {
    const endpoint = apiType === 'paid'
      ? 'http://localhost:3000/generate-tests'
      : 'http://localhost:3000/free-generate-test';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, language }),
    });
    const data = await response.json();
    setOutput(data?.tests?.error ?  data?.tests?.error?.message ? data?.tests?.error?.message : data?.tests?.error : data?.tests );
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Unit Test Case Generator
      </Typography>
      <ToggleButtonGroup
        color="primary"
        value={apiType}
        exclusive
        onChange={(e, val) => val && setApiType(val)}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="paid">Paid (OpenAI)</ToggleButton>
        <ToggleButton value="free">Free (Mock)</ToggleButton>
      </ToggleButtonGroup>
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <FileUploader setCode={setCode} />
      <CodeInput code={code} setCode={setCode} />
      <Button variant="contained" onClick={handleGenerate}>
        Generate Unit Tests
      </Button>
      <OutputDisplay output={output} />
    </Container>
  );
}

export default App;
