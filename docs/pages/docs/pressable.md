# Pressable component

`Pressable` is a styled modification of [React Native Pressable](https://reactnative.dev/docs/pressable)
component. For customization of pressed state a special modificator `:pressed`
can be used.

For the convenience of development, the `Pressable` component was extended to
accept a `string` as children.

### Example

```jsx
<Pressable
  sx={{
    'bg': 'primary',
    'color': 'black',
    'px': 3,
    'py': 1,
    ':pressed': { bg: 'secondary', color: 'white' },
  }}
>
  Press me!
</Pressable>
```

### Properties

All React Native `Pressable` component and `Box` properties are available.