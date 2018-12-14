import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import MainPage from './Components/MainPage/MainPage';
import FootBallGamePage from './Components/rasoulComponents/FootballPage/GamePage';
import BasketBallGamePage from './Components/rasoulComponents/BasketballPage/GamePage';
import NewsPage from './Components/rasoulComponents/NewsPage/NewsPage';
import TeamPage from "./Components/TeamPage/TeamPage";
import FootballPlayerPage from './Components/PlayerPage/FootballPlayer/FootballPlayerPage';
import BasketballPlayerPage from './Components/PlayerPage/BasketballPlayer/BasketballPlayerPage';


class App extends Component {
    componentDidMount() {
        document.title = "Main Page"
    }

    render() {
        return (
            <div className="App">
                {/*<NewsPage />*/}
                {/*<TeamPage/>*/}
                {/*<FootballPlayerPage/>*/}
                {/*<BasketballPlayerPage/>*/}
            </div>
        );
    }
}

export default App;
