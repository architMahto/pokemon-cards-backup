export const createApiRequestOptions = () => {
  return {
    mode: 'same-origin',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'error',
    referrer: 'no-referrer'
  };
};
