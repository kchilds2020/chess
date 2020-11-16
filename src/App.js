import React, {useState} from 'react'
import MatchState from './components/state/MatchState'
import Match from './components/Match'

const App = () => {
  const DARK_COLOR = 'rgba(0,165,255,.5)'
  const LIGHT_COLOR = 'rgb(210, 225, 239)'
  const [state, setState] = useState({
   playerColor: 'white',
   turn: 'white',
   pov: 'white',
   position: [
   [{
     rank: '1',
     file: 'a',
     piece: 'white-rook',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'b',
     piece: 'white-knight',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '1',
     file: 'c',
     piece: 'white-bishop',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'd',
     piece: 'white-queen',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '1',
     file: 'e',
     piece: 'white-king',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'f',
     piece: 'white-bishop',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '1',
     file: 'g',
     piece: 'white-knight',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '1',
     file: 'h',
     piece: 'white-rook',
     squareColor: `${LIGHT_COLOR}`
   }],
   [
   {
     rank: '2',
     file: 'a',
     piece: 'white-pawn',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'b',
     piece: 'white-pawn',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '2',
     file: 'c',
     piece: 'white-pawn',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'd',
     piece: 'white-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '2',
     file: 'e',
     piece: 'white-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'f',
     piece: 'white-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '2',
     file: 'g',
     piece: 'white-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '2',
     file: 'h',
     piece: 'white-pawn',
     squareColor:`${DARK_COLOR}`
   }],
   [
   {
     rank: '3',
     file: 'a',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'b',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '3',
     file: 'c',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'd',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '3',
     file: 'e',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'f',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '3',
     file: 'g',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '3',
     file: 'h',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   }],
   [
   {
     rank: '4',
     file: 'a',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'b',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '4',
     file: 'c',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'd',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '4',
     file: 'e',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'f',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '4',
     file: 'g',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '4',
     file: 'h',
     piece: '',
     squareColor:`${DARK_COLOR}`
   }],[
   {
     rank: '5',
     file: 'a',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'b',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '5',
     file: 'c',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'd',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '5',
     file: 'e',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'f',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '5',
     file: 'g',
     piece: '',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '5',
     file: 'h',
     piece: '',
     squareColor:`${LIGHT_COLOR}`
   }],[
   {
     rank: '6',
     file: 'a',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'b',
     piece: '',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '6',
     file: 'c',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'd',
     piece: '',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '6',
     file: 'e',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'f',
     piece: '',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '6',
     file: 'g',
     piece: '',
     squareColor: `${LIGHT_COLOR}`
   },
   {
     rank: '6',
     file: 'h',
     piece: '',
     squareColor: `${DARK_COLOR}`
   }],[
   {
     rank: '7',
     file: 'a',
     piece: 'black-pawn',
     squareColor: `${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'b',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '7',
     file: 'c',
     piece: 'black-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'd',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '7',
     file: 'e',
     piece: 'black-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'f',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '7',
     file: 'g',
     piece: 'black-pawn',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '7',
     file: 'h',
     piece: 'black-pawn',
     squareColor:`${LIGHT_COLOR}`
   }],[
   {
     rank: '8',
     file: 'a',
     piece: 'black-rook',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'b',
     piece: 'black-knight',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '8',
     file: 'c',
     piece: 'black-bishop',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'd',
     piece: 'black-queen',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '8',
     file: 'e',
     piece: 'black-king',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'f',
     piece: 'black-bishop',
     squareColor:`${DARK_COLOR}`
   },
   {
     rank: '8',
     file: 'g',
     piece: 'black-knight',
     squareColor:`${LIGHT_COLOR}`
   },
   {
     rank: '8',
     file: 'h',
     piece: 'black-rook',
     squareColor:`${DARK_COLOR}`
   }]],
   matchRecord: []
  })
  return(
    <MatchState.Provider value={{state, setState}}>
      <Match />
    </MatchState.Provider>
  )
}

export default App
