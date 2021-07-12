import { useState } from 'react';
import { Service } from 'types/Services';
import config from 'environment';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export default function useCrudService<T>(): {
  service: Service<T>;
  fetchService: (url: string, method: Method, data?: any) => Promise<any>;
} {
  const [service, setService] = useState<Service<T>>({
    status: 'init'
  });

  const fetchService = (url: string, method: Method, data?: any): Promise<any> => {
    setService({ status: 'loading' });

    const headers = {
      'Content-Type': 'application/json; charset=utf-8'
    };

    return new Promise((resolve, reject) => {
      fetch(config.BASE_URL + url, {
        method,
        body: JSON.stringify(data),
        headers
      })
        .then((response) => response.json())
        .then((response) => {
          console.log({ response });
          setService({ status: 'loaded', response });
          resolve(response);
        })
        .catch((error) => {
          console.log({ error });
          setService({ status: 'error', error });
          reject(error);
        });
    });
  };

  return {
    service,
    fetchService
  };
}
