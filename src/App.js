import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import MainPage from './Components/MainPage';
import GamePage from './Components/rasoulComponents/GamePage';

class App extends Component {
    componentDidMount() {
        document.title = "Main Page"
    }

    render() {
        return (
            <div className="App">
                <GamePage  />
            </div>
        );
    }
}

export default App;
