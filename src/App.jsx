import { ApolloProvider } from '@apollo/client';

import Characters from './components/Characters';
import Starships from './components/Starships';
import Films from './components/Films';
import Species from './components/Species';
import Vehicles from './components/Vehicles';

import client from './client/client';

function App() {
    return (
        <ApolloProvider client={client}>
            <div>
                <h1>GraphQL with React and Apollo Client</h1>
                <Characters />
                <Starships />
                <Films />
                <Species />
                <Vehicles />
            </div>
        </ApolloProvider>
    );
}

export default App;
