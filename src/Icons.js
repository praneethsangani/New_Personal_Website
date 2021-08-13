import React from 'react';
import notepad_icon from "./assets/notepad_icon.png";
import ie_icon from "./assets/ie.png";
import paint_icon from "./assets/paint_icon.png";
import solitaire_icon from "./assets/solitaire_icon.png";
import minesweeper_icon from "./assets/minesweeper_icon.png";
import calculator_icon from "./assets/calculator_icon.png";

function Icons({onClickPaint, onClickSolitaire, onClickMinesweeper, onClickPuzzle, onClickResume}) {
    return (
        <div className={'icon_containers'}>
            <div className={'icon'}>
                <span>&nbsp;&nbsp;</span>
                <img src={notepad_icon} alt="Resume" onClick={onClickResume}/>
                <p><span>&nbsp;&nbsp;</span>Resume</p>
            </div>
            <div className={'icon'}>
                <span>&nbsp;&nbsp;</span>
                <a href={'https://github.com/praneethsangani'}
                   target={'_blank'}
                   rel="noreferrer">
                    <img src={ie_icon} alt="Github"/></a>
                <p><span>&nbsp;&nbsp;</span>GitHub</p>
            </div>
            <div className={'icon'}>
                <a href={'https://www.linkedin.com/in/praneeth-sangani/'}
                   target={'_blank'}
                   rel="noreferrer">
                    <img src={ie_icon} alt="Linkedin Icon"/></a>
                <p>Linkedin</p>
            </div>
            <div className={'icon'}>
                <img src={calculator_icon} alt="Puzzle Icon" onClick={onClickPuzzle}/>
                <p>Puzzles</p>
            </div>
            <div className={'icon'}>
                <span>&nbsp;&nbsp;</span>
                <img src={paint_icon} alt="Paint Icon" onClick={onClickPaint}/>
                <p><span>&nbsp;&nbsp;</span>Paint</p>
            </div>
            <div className={'icon'}>
                <img src={solitaire_icon} alt="Solitaire Icon" onClick={onClickSolitaire}/>
                <p>Spider <br/> Solitaire</p>
            </div>
            <div className={'icon'}>
                <img src={minesweeper_icon} alt="Minesweeper Icon" onClick={onClickMinesweeper}/>
                <p>Mine<br/>sweeper</p>
            </div>
        </div>
    );
}

export default Icons;