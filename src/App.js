import React, {Component} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import LeaguePage from './Components/rasoulComponents/LeaguePage/LeaguePage';
import MainPage from './Components/MainPage/MainPage';
import FootBallGamePage from './Components/rasoulComponents/FootballPage/GamePage';
import BasketBallGamePage from './Components/rasoulComponents/BasketballPage/GamePage';
import FootballPlayerPage from './Components/PlayerPage/FootballPlayer/FootballPlayerPage';
import BasketballPlayerPage from './Components/PlayerPage/BasketballPlayer/BasketballPlayerPage';
import NewsPage from './Components/rasoulComponents/NewsPage/NewsPage';
import TeamPage from "./Components/TeamPage/TeamPage";

class App extends Component {
    componentDidMount() {
        document.title = "Main Page"
    }

    render() {
        return (
            <div className="App">

                {/*<MainPage/>*/}
                {/*<TeamPage/>*/}
                {/*<FootballPlayerPage/>*/}
                {/*<BasketballPlayerPage/>*/}
                {/*warning in console*/}
                {/*<LeaguePage />*/}
                {/*<NewsPage />*/}
                {/*warning in console*/}
                {/*<FootBallGamePage/>*/}
                {/*warning in console*/}
                {/*<BasketBallGamePage/>*/}




            </div>
        );
    }
}

export default App;
