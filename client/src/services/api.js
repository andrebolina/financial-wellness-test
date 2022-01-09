const baseURL = 'http://localhost:5000';

export const apiGet = (resource, options = {}) => {
  return fetch(`${baseURL}/${resource}`, {
    ...options,
    method: "GET"
  })
    .then(resp => resp.json())
    .catch(err => console.log(`API has been a has been a problem with your GET operation: ${err}`));
}

export const apiPost = (resource, options = {}) => {
  return fetch(`${baseURL}/${resource}`, {
    ...options,
    method: "POST"
  })
    .then(resp => resp.json())
    .catch(err => console.log(`API has been a has been a problem with your POST operation: ${err}`));
}