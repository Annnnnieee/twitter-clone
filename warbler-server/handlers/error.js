function errorHandler(error, request, response, next){
    return response.status(error.stats || 500).json({
        error: {
            message: error.message || "oops, something went wrong"
        }
    })
}

module. exports = errorHandler;