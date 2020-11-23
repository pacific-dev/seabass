import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image } from "react-native";
import { ThemeProvider } from "@seabass/theme-provider";
import theme from "@seabass/preset";
import { Box } from "@seabass/flexbox";
import { Stack } from "@seabass/layout";
import { Label, Input, Textarea } from "@seabass/forms";
import { Pressable, Text } from "@seabass/seabass";

const Placeholder = () => <Box width={100} height={20} bg={"black"} />;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box px={2} py={2}>
        <Label>Open up App.js to start working on your app!</Label>
        <Input />
        <Textarea />
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
          }}
          source={{ uri: "https://picsum.photos/200/200" }}
        />
        <Pressable>
          {({ pressed }) => (
            <Text sx={{ color: "inherit" }}>
              I'm {pressed ? "not pressed" : "pressed"}
            </Text>
          )}
        </Pressable>
        <StatusBar style="auto" />
      </Box>
      <Stack space={3} px={2}>
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
    </ThemeProvider>
  );
}
