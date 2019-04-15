import React, { Component } from 'react';
import { connect }          from 'react-redux';
import GameContext          from '../game-context';
import GameLoop             from '../game-loop';

class Game extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
    this.gameLoop = new GameLoop();
    this.width = 0;
    this.height = 0;

    this.setCanvasSize = this.setCanvasSize.bind(this);
  }

  componentDidMount() {
    if (this.canvasRef && this.canvasRef.current) {
      this.canvasRenderingContext = this.canvasRef.current.getContext("2d");
    }
    this.gameLoop.start();
  }

  componentWillUnmount() {
    this.gameLoop.stop();
  }

  setCanvasSize(canvasRenderingContext, width, height) {
    canvasRenderingContext.canvas.width = width;
    canvasRenderingContext.canvas.height = height;
    this.width = width;
    this.height = height;
  }

  render() {
    const { appState } = this.props;
    const { sideMenu } = appState;

    return (
      <GameContext.Provider
        value={{
          canvasRenderingContext: this.canvasRenderingContext,
          gameLoop: this.gameLoop,
          setCanvasSize: this.setCanvasSize,
          viewportWidth: this.width,
          viewportHeight: this.height
        }}
      >
        <div className={`centered ${sideMenu ? "flex-row" : "flex-column"}`}>
          <canvas ref={this.canvasRef}>{this.props.children}</canvas>
        </div>
      </GameContext.Provider>
    );
  }
}

const mapStateToProps = ({ appState }) => ({ appState });

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(Game);
