import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import MainPage from './Components/MainPage/MainPage';
import FootBallGamePage from './Components/rasoulComponents/FootballPage/GamePage';
import BasketBallGamePage from './Components/rasoulComponents/BasketballPage/GamePage';
import NewsPage from './Components/rasoulComponents/NewsPage/NewsPage';

class App extends Component {
    componentDidMount() {
        document.title = "Main Page"
    }

    render() {
        return (
            <div className="App">
                <NewsPage />
            </div>
        );
    }
}

export default App;
