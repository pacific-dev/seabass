import { Box } from '@seabass-ui/flexbox';
import { Stack } from '@seabass-ui/layout';
import { Pressable } from '@seabass-ui/seabass';
import { Text } from '@seabass-ui/seabass';
import React from 'react';

function InteractionScreen() {
  return (
    <Stack space={3} px={2}>
      <Box flexDirection="row">
        <Pressable>
          {({ pressed }) => (
            <Text sx={{ color: 'text.4' }}>
              I'm {pressed ? 'not pressed' : 'pressed'}
            </Text>
          )}
        </Pressable>
        <Pressable variant="secondary">Cancel</Pressable>
      </Box>
    </Stack>
  );
}

export default InteractionScreen;
