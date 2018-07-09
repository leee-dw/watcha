export const loadData = (url, handler) => {
  axios.get(url).then(response => {
    handler(response.data);
  })
}