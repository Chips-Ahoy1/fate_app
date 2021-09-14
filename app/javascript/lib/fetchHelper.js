export const fetchHelper = (response) => {
  if(!response){
    return []
  }
  return response.results
}
