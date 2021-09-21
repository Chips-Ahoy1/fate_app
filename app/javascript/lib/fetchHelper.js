import React, { Component } from 'react'

export const fetchHelper = (response) => {
  if(!response||!response.results){
    // alert('Error in reponse') doesnt see this as a function
    return []
  }
  return response.results.map(img => {
    return(img.urls.regular)
  })
}
