import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "@seabass/theme-provider";
import theme from "@seabass/preset";
import { Box } from "@seabass/flexbox";
import { Label, Input, Textarea } from "@seabass/forms";
import { Pressable, Text } from "@seabass/seabass";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ px: 2, py: 2 }}>
        <Label>Open up App.js to start working on your app!</Label>
        <Input />
        <Textarea />
        <Pressable>
          {({ pressed }) => (
            <Text sx={{color: "inherit"}}>I'm {pressed ? "not pressed" : "pressed"}</Text>
          )}
        </Pressable>
        <StatusBar style="auto" />
      </Box>
    </ThemeProvider>
  );
}
