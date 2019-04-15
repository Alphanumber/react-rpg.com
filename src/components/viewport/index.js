import React       from 'react';
import { connect } from "react-redux";
import GameContext from "../../features/game-context";

import {
  GAME_VIEWPORT_SIZE,
  GAME_VIEWPORT_SIZE_LG
} from "../../config/constants";

class Viewport extends React.Component {
  static contextType = GameContext;

  componentDidUpdate() {
    const { largeView } = this.props.appState;
    const { canvasRenderingContext, setCanvasSize } = this.context;
    const gameSize = largeView ? GAME_VIEWPORT_SIZE_LG : GAME_VIEWPORT_SIZE;
    setCanvasSize(canvasRenderingContext, gameSize, gameSize);
  }

  render() {
    return <>{this.props.children}</>;
  }
}

const mapStateToProps = ({ appState }) => ({ appState });

export default connect(mapStateToProps)(Viewport);
