import { generateBoard, isRowValueSame, findWinner } from '../../src/utils';

describe('generateBoard function', () => {
  it('should return the array of 9 when input is not given',() => {
    expect(generateBoard().length).toEqual(9)
  })

  it('should return the array of given value',() => {
    expect(generateBoard(16).length).toEqual(16)
  })
});

describe('isRowValueSame function', () => {
  it('should return the player1 when row is same',() => {
    expect(isRowValueSame(1,1,1)).toEqual(1)
  })

  it('should return the player2 when row is same',() => {
    expect(isRowValueSame(2,2,2)).toEqual(2)
  })

  it('should return the null when row is not same',() => {
    expect(isRowValueSame(1,1,2)).toEqual(null)
  })
});

describe('findWinner', () => {
  it('should return the player1 as won',() => {
    const player1Board = [1, 1, 1, null, null, null, null, null, null]
    expect(findWinner(player1Board)).toEqual(1)
  })

  it('should return the player2 as won',() => {
    const player2Board = [1, 1, 2, null, 2, 1, 2, null, null]
    expect(findWinner(player2Board)).toEqual(2)
  })

  it('should return the draw',() => {
    const drawBoard = [1, 2, 1, 2, 1, 1, 2, 1, 2]
    expect(findWinner(drawBoard)).toEqual('draw')
  })
})