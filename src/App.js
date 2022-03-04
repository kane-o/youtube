import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Player from './components/Player';
import Thumbs from './components/Thumbs';
import VideoId from './components/VideoId';

function App() {
  const [id, setId] = useState("q_rxsPa_YCk");
  const [submittedId, setSubmittedId] = useState("");

  function _handleSubmit(event) {
    setSubmittedId(id);
    event.preventDefault();
  }

  function _handleChange(event) {
    setId(event.target.value);
  }

  return (
    <>
      <Box sx={{ width: '75%', display: 'inline-block', verticalAlign: 'bottom' }}>
        <Player id={submittedId} />
      </Box>

      <Box sx={{ width: '25%', display: 'inline-block', verticalAlign: 'bottom' }}>

        <Container>

          <Thumbs />

          <br />

          <VideoId
            id={id}
            _handleChange={_handleChange}
            _handleSubmit={_handleSubmit}
          />

        </Container>

      </Box>
    </>
  );
}

export default App;
