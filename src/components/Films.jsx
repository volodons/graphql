import { useQuery } from '@apollo/client';

import { GET_FILMS } from '../queries/queries';

const Films = () => {
    const { loading, error, data } = useQuery(GET_FILMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Star Wars Films:</h2>
            <ul>
                {data.allFilms.films.map((film) => (
                    <li key={film.id}>
                        <strong>{film.title}</strong> - Release Date: {film.releaseDate}, Director: {film.director}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Films;
