export default function taskBlock(trueOrFalse) {
  const task = false; // Use const for variables that won't be reassigned
  let task2 = true;   // Use let for variables that may be reassigned

  if (trueOrFalse) {
    const task = true; // Use const for variables in the block scope
    task2 = false;     // Reassign task2 with let
  }

  return [task, task2];
}
