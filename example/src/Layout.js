import { Box } from '@seabass-ui/flexbox';
import { Stack } from '@seabass-ui/layout';
import React from 'react';

const Placeholder = () => <Box width={100} height={20} bg={'black'} />;

function LayoutScreen() {
  return (
    <Stack space={3} px={2} py={3}>
      <Stack space={2} vertical={false}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>
      <Stack space={2} vertical={true}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </Stack>
    </Stack>
  );
}

export default LayoutScreen;
