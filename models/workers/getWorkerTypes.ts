export const getWorkerTypes = async () => {
  return fetch(`${process.env.LOCAL_URL}/getWorkerTypes`);
};
