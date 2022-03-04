import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

function Thumbs() {
  const [alignment, setAlignment] = useState(null);

  function handleAlignment(event, newAlignment) {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="thumbsUp" aria-label="thumbsUp">
        <ThumbUpIcon />
      </ToggleButton>

      <ToggleButton value="thumbsDown" aria-label="thumbsDown">
        <ThumbDownIcon />
      </ToggleButton>

    </ToggleButtonGroup>
  );
}

export default Thumbs;
