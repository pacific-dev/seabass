# @seabass-ui/layout

Use to create distributed items with a constat space between into a column or a row. 
A `Stack` wraps each children of the stack in a `Box` that handles the spacing.

### Example

```jsx
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
```

### Stack properties

| Prop     | Type    | Description                                                    | Default |
| -------- | ------- | -------------------------------------------------------------- | ------- |
| space    | space   | Space to be added to the top of each children except first one | 0       |
| vertical | bool    | Render children vertically or horizontally                     | true    |
