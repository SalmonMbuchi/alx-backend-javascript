export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const res = mathFunction();
    queue.push(res, 'Guardrail was processed');
    return queue;
  } catch (e) {
    queue.push(`Error: ${e.message}`, 'Guardrail was processed');
    return queue;
  }
}
