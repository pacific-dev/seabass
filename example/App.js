import { StatusBar } from "expo-status-bar";
import React from "react";
import { Box } from "@seabass/flexbox";
import { Label, Input, Textarea } from "@seabass/forms";

export default function App() {
  return (
    <Box sx={{ px: 2, py: 2 }}>
      <Label>Open up App.js to start working on your app!</Label>
      <Input />
      <Textarea />
      <StatusBar style="auto" />
    </Box>
  );
}
