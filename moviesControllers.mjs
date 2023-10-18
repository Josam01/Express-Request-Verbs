export const getAllMovies = (request, response) => {

    const MOVIES_LIST = ['Alita: The Battle angel', 'Far from Home']

    return response.json({
        message: 'Movies fetched successfully',
        results: MOVIES_LIST
    })
}


export const getOneMovie =  (request, response) => {
    const MOVIES_LIST = ['Alita: The Battle angel', 'Far from Home']

    const movieId = parseInt(request.params.movieId)

    if(movieId > MOVIES_LIST.length - 1){
        return response.json({
            message: 'Movie with that Id does not exist',
            results: null
        })
    }

    const movie = MOVIES_LIST[movieId]

   
    return response.json({
        message: 'Movie fetched successfully',
        results: movie
    })

}

export const addMovie =  (request, response) => {
   
    const MOVIES_LIST = ['Alita: The Battle angel', 'Far from Home']

    const movieName = request.body.movieName

    MOVIES_LIST.push(movieName)

    return response.json({
        message: 'Movie Added Successfully',
        results: MOVIES_LIST
    })
}


export const updateMovie = (request, response) => {

    const MOVIES_LIST = ['Alita: The Battle angel', 'Far from Home']

    const movieId = parseInt(request.params.movieId)

    const name = request.body.name

    if(movieId > MOVIES_LIST.length - 1){
        return response.json({
            message: 'Movie with that Id does not exist',
            results: null
        })
    }

    MOVIES_LIST[movieId] = name


    return response.json({
        message: 'Updated successfully',
        results: MOVIES_LIST
    })
}

export const deleteMovie = (request, response)=> {
    const MOVIES_LIST = ['Alita: The Battle angel', 'Far from Home']

    const movieId = parseInt(request.params.movieId)

    if(movieId > MOVIES_LIST.length - 1){
        return response.json({
            message: 'Movie with that Id does not exist',
            results: null
        })
    }

    MOVIES_LIST.pop()

    return response.json({
        message: 'Delete successfully',
        results: MOVIES_LIST
    })
}


