export default {
  createBoard: () => ({
    type: 'CREATE_BOARD',
  }),

  setActivePlayer: playerNumber => ({
    type: 'SET_ACTIVE_PLAYER',
    playerNumber,
  }),

  setWinner: playerNumber => ({
    type: 'SET_WINNER',
    playerNumber,
  }),

};
