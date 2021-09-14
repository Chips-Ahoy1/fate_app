export const fetchHelper = (response) => {
  if(!response){
    return []
  }
  return response.results.map(img => {
    return(img.urls.regular)
  })
}
