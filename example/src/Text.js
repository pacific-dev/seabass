import React from 'react';
import { Text, Heading } from '@seabass-ui/seabass';
import { Stack } from '@seabass-ui/layout';

function TextScreen() {
  return (
    <Stack space={3} p={3}>
      <Heading>Hello world!</Heading>

      <Text variant="tiny">Hello world!</Text>
      <Text variant="small">Hello world!</Text>
      <Text variant="body">Hello world!</Text>
      <Text variant="heading">Hello world!</Text>
      <Text variant="large">Hello world!</Text>
      <Text variant="xlarge">Hello world!</Text>
    </Stack>
  );
}

export default TextScreen;
