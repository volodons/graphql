import { useQuery } from '@apollo/client';

import { GET_STARSHIPS } from '../queries/queries';

const Starships = () => {
    const { loading, error, data } = useQuery(GET_STARSHIPS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Star Wars Starships:</h2>
            <ul>
                {data.allStarships.starships.map((starship) => (
                    <li key={starship.id}>
                        <strong>{starship.name}</strong> - Model: {starship.model}, Class: {starship.starshipClass}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Starships;
