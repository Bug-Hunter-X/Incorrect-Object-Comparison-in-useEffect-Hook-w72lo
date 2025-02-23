# Incorrect Object Comparison in useEffect Hook

This example demonstrates a common error in React's `useEffect` hook when dealing with object comparisons.  The provided `MyComponent` compares objects directly using `!==`, which only checks for reference equality.  This means that even if the object's properties change, the comparison will return `false` unless a new object reference is created, leading to unexpected behavior.

## Solution:

The solution involves using a deep comparison library or implementing a custom deep comparison function to ensure all property changes are detected.

## How to reproduce:

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that the console log doesn't trigger when object properties are modified.