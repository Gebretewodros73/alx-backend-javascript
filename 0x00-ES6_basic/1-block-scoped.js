export default function taskBlock(trueOrFalse) {
  const task = false; // Declared as block-scoped variable
  const task2 = true; // Declared as block-scoped variable

  if (trueOrFalse) {
    const task = true; // Declared as block-scoped variable (different from the one above)
    const task2 = false; // Declared as block-scoped variable (different from the one above)
  }

  return [task, task2];
}
