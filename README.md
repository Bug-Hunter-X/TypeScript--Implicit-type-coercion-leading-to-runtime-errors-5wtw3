# TypeScript Implicit Type Coercion Bug

This repository demonstrates a common issue in TypeScript where implicit type coercion can lead to unexpected runtime errors.  TypeScript's type system helps catch many errors at compile time, but it doesn't prevent all runtime issues, especially when dealing with type coercion.

## The Bug

The `add` function is designed to add two numbers. However, due to TypeScript's implicit type coercion, calling `add(1, '2')` compiles without error. During runtime, TypeScript converts '2' to a number, but the result is NaN (Not a Number). This can be difficult to track and debug, especially in larger applications.

## Solution

The solution involves using type guards or more explicit type checking to prevent such errors.  This ensures that only numbers are passed to the function, preventing the runtime issue.