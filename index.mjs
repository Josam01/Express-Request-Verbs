import express from 'express'
import { addMovie, deleteMovie, getAllMovies, getOneMovie, updateMovie } from './moviesControllers.mjs'
import { serverStarted } from './serverStarted.mjs'

const app = express()

export const PORT = 5000

app.use(express.json())

// Get request for fetching data from the server


// resource -> Movie


// C R U D

/**
 * 
 * C - Create  -  [POST] Create the resource | '/RESOURCE_NAME(Plural FORM)' - POST 
 * 
 * R - Retrieval - [GET] Get All the resource | '/RESOURCE_NAME(Plural FORM)' - GET
 *
 *                 - [GET] Get one of the resource | '/RESOURCE_NAME(Plural Form)/:uniqueDetailToIdentifierTheResourceYouWantToGet
 * 
 *                  - /movies/:movieId -> /movies/1234566
 * 
 *   U - Update -  [PATCH] ---/movies/:movieId
 *              
 * 
 * 
 * D - Deletion - [DELETE] ---/movies/:movieId
 * 
 */

app.get('/movies', getAllMovies)


// Get one movie
// /movies/2

app.get('/movies/:movieId',getOneMovie)



// Post Request for sending daa to the server

app.post('/movies', addMovie)


// Patch Request for modifying the resource on the server

app.patch('/movies/:movieId', updateMovie)



// Delete Request for deleting a resource on the server
app.delete('/movies/:movieId', deleteMovie )




app.listen(PORT, serverStarted)
