import './App.css';
import Paint from './Paint'
import Solitaire from "./Solitaire";
import React from "react";
import {Window} from 'react-windows-xp';
import "react-minesweeper/lib/minesweeper.css";
import Minesweeper from 'react-minesweeper';
import Icons from "./Icons";
import StartMessageContent from "./StartMessage";
import Puzzle from "./Puzzle";
import Resume from "./Resume";
import loading from './assets/loading_screen.gif';
import start from './assets/start.png';

class App extends React.Component {
    onClickRestartMinesweeper = () => {
        this.setState({
            isFocusMinesweeper: !this.state.isFocusMinesweeper
        }, () => {
            this.setState({
                isFocusMinesweeper: !this.state.isFocusMinesweeper
            })
        })
    }
    onClickMinesweeper = () => {
        this.setState({
            isFocusMinesweeper: !this.state.isFocusMinesweeper
        })
    }
    onClickSolitaire = () => {
        this.setState({
            isFocusSolitaire: !this.state.isFocusSolitaire
        })
    }
    onClickPuzzle = () => {
        this.setState({
            isFocusPuzzle: !this.state.isFocusPuzzle
        })
    }
    onClickResume = () => {
        this.setState({
            isFocusResume: !this.state.isFocusResume
        })
    }
    onClickPaint = () => {
        this.setState({
            isFocusPaint: !this.state.isFocusPaint
        })
    }
    onClickStartMessage = () => {
        this.setState({
            startMessage: !this.state.startMessage
        })
    }

    state = {
        isFocusMinesweeper: false,
        isFocusSolitaire: false,
        isFocusPuzzle: false,
        isFocusResume: false,
        isFocusPaint: false,
        startMessage: true,
        loading_screen: true
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading_screen: false
            })
        }, 3500);
    }

    render() {
        return (
            <div className="App">
                {this.state.loading_screen ? <img id={'loading_screen'} src={loading} alt={'loading...'}/> :
                    <div>
                        <Icons onClickMinesweeper={this.onClickMinesweeper}
                               onClickSolitaire={this.onClickSolitaire}
                               onClickPuzzle={this.onClickPuzzle}
                               onClickResume={this.onClickResume}
                               onClickPaint={this.onClickPaint}/>

                        {this.state.startMessage ? <Window title={'Notice'}
                                                           id={'start_message'}
                                                           children={<StartMessageContent/>}
                                                           showClose={true}
                                                           onClose={this.onClickStartMessage}/> : null}

                        {this.state.isFocusResume ? <Window title={'Resume'}
                                                            id={'resume_window'}
                                                            children={<Resume/>}
                                                            showClose={true}
                                                            onClose={this.onClickResume}/> : null}

                        {this.state.isFocusPuzzle ? <Window title={'Puzzle'}
                                                            id={'puzzle'}
                                                            children={<Puzzle/>}
                                                            showClose={true}
                                                            onClose={this.onClickPuzzle}/> : null}

                        {this.state.isFocusPaint ? <Window title={'Paint'}
                                                           children={<Paint/>}
                                                           showClose={true}
                                                           onClose={this.onClickPaint}/> : null}

                        {this.state.isFocusSolitaire ? <Window title={'Spider Solitaire'}
                                                               children={<Solitaire/>}
                                                               showClose={true}
                                                               onClose={this.onClickSolitaire}/> : null}

                        {this.state.isFocusMinesweeper ? <Window title={'Minesweeper'}
                                                                 id={'minesweeper_window'}
                                                                 children={<div>
                                                                     <button className={'button'}
                                                                         onClick={this.onClickRestartMinesweeper}>Restart
                                                                     </button>
                                                                     <Minesweeper bombChance={0.15} />
                                                                 </div>}
                                                                 showClose={true}
                                                                 onClose={this.onClickMinesweeper}/> : null}
                        <div id={'start_bar'}>
                            <img src={start} onClick={this.onClickStartMessage} alt={'start_logo'}/>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default App;
