import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
    query GetCharacters {
        allPeople(first: 5) {
            people {
                id
                name
                birthYear
                gender
            }
        }
    }
`;

export const GET_STARSHIPS = gql`
    query GetStarships {
        allStarships(first: 5) {
            starships {
                id
                name
                model
                starshipClass
            }
        }
    }
`;

export const GET_FILMS = gql`
    query GetFilms {
        allFilms(first: 5) {
            films {
                id
                title
                releaseDate
                director
            }
        }
    }
`;

export const GET_VEHICLES = gql`
    query GetVehicles {
        allVehicles(first: 5) {
            vehicles {
                id
                name
                model
                vehicleClass
            }
        }
    }
`;

export const GET_SPECIES = gql`
    query GetSpecies {
        allSpecies(first: 5) {
            species {
                id
                name
                classification
                language
            }
        }
    }
`;
