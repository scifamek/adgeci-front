export function initApp(): Promise<any> {
  return new Promise((resolve) => {
    const data = {
      entities: 'http://localhost:4501',
    };

    resolve(data);
  });
}
