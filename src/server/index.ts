function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getTodos() {
  await sleep(1000);

  return ['first', 'second', 'third'];
}
