import React    from 'react';

export const GameContext = React.createContext({
    canvasRenderingContext: null,
    gameLoop: null,
    setCanvasSize: null,
    viewportWidth: 0,
    viewportHeight: 0
});

export default GameContext;