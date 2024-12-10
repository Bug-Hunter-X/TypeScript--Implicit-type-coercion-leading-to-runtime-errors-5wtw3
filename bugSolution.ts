function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

let result1 = add(1, 2); // Works correctly

try {
  let result2 = add(1, '2'); // Throws an error
} catch (error) {
  console.error(error.message);
}

// Alternatively, using a type guard:
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
  return a + b;
}

let result3 = addSafe(1, 2); // Works correctly

try {
  let result4 = addSafe(1, '2'); // Throws an error
} catch (error) {
  console.error(error.message);
}