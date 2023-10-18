const z = require('zod')

const movieSchema = z.object({
    title: z.string({
        invalid_type_errorMessage: 'Title must be a string',
        required_error: 'Title is required, pls check url'
    }),
    genre: z.array(z.string()),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().int().positive(),
    rate: z.number().min(0).max(10).default(5),
    poster: z.string().url({
        message: 'Poster must be a valid url'
    }),
    genre: z.array(
        z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Thriller','Sci-Fi','Horror','Crime']),
        {
            invalid_type_errorMessage: 'Genre must be a string',
            required_error: 'Genre is required, pls check url'
        }
    )
})

function validateMovie(input) {
    return movieSchema.safeParse(input)
}

function validatePartialMovie(input) {
    return movieSchema.partial().safeParse(input)
}


module.exports = {
    validateMovie,
    validatePartialMovie
}