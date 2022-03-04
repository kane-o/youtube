import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function VideoId({ id, _handleChange, _handleSubmit }) {

  return (
    <form onSubmit={_handleSubmit}>
      <Box sx={{ width: '75%', display: 'inline-block' }}>
        <TextField
          id="standard-basic"
          label="Video Id"
          variant="standard"
          value={id}
          onChange={_handleChange}
        />
      </Box>
      <Box sx={{ width: '25%', display: 'inline-block' }}>
        <Button
          variant="contained"
          size="small"
          type="submit"
        >
          Change
        </Button>
      </Box>
    </form>
  );
}

export default VideoId;
