import React    from 'react';

export const GameContext = React.createContext({
    canvas: null,
    gameLoop: null
});

export default GameContext;