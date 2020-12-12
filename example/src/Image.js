import { Box } from '@seabass-ui/flexbox';
import { Stack } from '@seabass-ui/layout';
import { Image } from '@seabass-ui/seabass';
import React from 'react';

function FormsScreen() {
  return (
    <Stack space={3} px={2}>
         
         <Image
            sx={{
              width: 50,
              height: 50,
              borderRadius: 'circle',
            }}
            source={{ uri: 'https://picsum.photos/200/200' }}
          />
    </Stack>
  );
}

export default FormsScreen;
