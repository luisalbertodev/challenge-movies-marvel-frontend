import config from 'environment';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const fetchService = (url: string, method: Method, data?: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(config.BASE_URL + url, {
      method,
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((response) => {
        console.log({ response });
        resolve(response);
      })
      .catch((error) => {
        // console.log({ error });
        reject(error);
      });
  });
};

export default fetchService;
