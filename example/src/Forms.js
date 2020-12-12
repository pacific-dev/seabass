import { Box } from '@seabass-ui/flexbox';
import { Input, Textarea } from '@seabass-ui/forms';
import { Stack } from '@seabass-ui/layout';
import React from 'react';

function FormsScreen() {
  return (
    <Stack space={3} px={2}>
      <Input placeholder="Type something" />
          <Textarea placeholder="Type something more" />
    </Stack>
  );
}

export default FormsScreen;
