import { useQuery } from '@apollo/client';

import { GET_CHARACTERS } from '../queries/queries';

const Characters = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Star Wars Characters:</h2>
            <ul>
                {data.allPeople.people.map((character) => (
                    <li key={character.id}>
                        <strong>{character.name}</strong> - Birth Year: {character.birthYear}, Gender:{' '}
                        {character.gender}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Characters;
