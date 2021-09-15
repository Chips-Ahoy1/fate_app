export const fetchHelper = (response) => {
  if(!response||!response.results){
    alert('Error in reponse')
    return []
  }
  return response.results.map(img => {
    return(img.urls.regular)
  })
}
