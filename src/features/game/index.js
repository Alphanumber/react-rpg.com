import React, { Component } from 'react';
import { connect }          from 'react-redux';
import GameContext          from '../game-context';
import GameLoop             from '../game-loop';

class Game extends Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
        this.gameLoop = new GameLoop();
      }

      componentDidMount() {
        if (this.canvasRef && this.canvasRef.current) {
            this.canvas = this.canvasRef.current.getContext('2d');
        }
        this.gameLoop.start();
      }

      componentWillUnmount() {
        this.gameLoop.stop();
      }

    render() {
        const { appState } = this.props;
        const { sideMenu } = appState;

        return (
            <GameContext.Provider value={{canvas: this.canvas, gameLoop: this.gameLoop}}>
                <div className={`centered ${sideMenu ? 'flex-row' : 'flex-column'}`}>
                    {this.props.children}
                </div>
            </GameContext.Provider>
        );
      }
}

const mapStateToProps = ({appState}) => ({appState});

const actions = {};

export default connect(mapStateToProps, actions)(Game);