export type Movie = {
    id: number,
    poster_path: string,
    title: string,
    release_date: string,
    vote_average: number,
    overview: string,
    genres: [{
        id: number,
        name: string
    }]
};