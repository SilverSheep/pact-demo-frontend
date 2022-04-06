"use strict"

const axios = require("axios")

// This is an example consumer that accesses the Demo backend via HTTP
// TODO: replace these functions with your actual ones
 
// Gets multiple entries from the Demo backend
exports.getMeDogs = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/dogs",
    headers: { Accept: "application/json" },
  })
}

// Gets a single entry by ID from the Demo backend
exports.getMeDog = endpoint => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/dogs/1",
    headers: { Accept: "application/json" },
  })
}
