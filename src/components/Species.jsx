import { useQuery } from '@apollo/client';

import { GET_SPECIES } from '../queries/queries';

const Species = () => {
    const { loading, error, data } = useQuery(GET_SPECIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Star Wars Species:</h2>
            <ul>
                {data.allSpecies.species.map((species) => (
                    <li key={species.id}>
                        <strong>{species.name}</strong> - Classification: {species.classification}, Language:{' '}
                        {species.language}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Species;
