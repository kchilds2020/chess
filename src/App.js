import React, {useState} from 'react';
import './App.css';
/* import Board from './Board' */
import Rank from './components/Rank'
import styled from 'styled-components'

function App() {

 const [turn, setTurn] = useState('white') 
 const [position, setPosition] = useState([
   {
     rank: '1',
     file: 'a',
     piece: 'rook'
   },
   {
     rank: '1',
     file: 'b',
     piece: 'knight'
   },
   {
     rank: '1',
     file: 'c',
     piece: 'bishop'
   },
   {
     rank: '1',
     file: 'd',
     piece: 'queen'
   },
   {
     rank: '1',
     file: 'e',
     piece: 'king'
   },
   {
     rank: '1',
     file: 'f',
     piece: 'bishop'
   },
   {
     rank: '1',
     file: 'g',
     piece: 'knight'
   },
   {
     rank: '1',
     file: 'h',
     piece: 'rook'
   },
   {
     rank: '2',
     file: 'a',
     piece: 'pawn'
   },
   {
     rank: '2',
     file: 'b',
     piece: 'pawn'
   },
   {
     rank: '2',
     file: 'c',
     piece: 'pawn'
   },
   {
     rank: '2',
     file: 'd',
     piece: 'pawn'
   },
   {
     rank: '2',
     file: 'e',
     piece: 'pawn'
   },
   {
     rank: '2',
     file: 'f',
     piece: 'pawn'
   },
   {
     rank: '2',
     file: 'g',
     piece: 'pawn'
   },
   {
     rank: '2',
     file: 'h',
     piece: 'pawn'
   },
   {
     rank: '3',
     file: 'a',
     piece: ''
   },
   {
     rank: '3',
     file: 'b',
     piece: ''
   },
   {
     rank: '3',
     file: 'c',
     piece: ''
   },
   {
     rank: '3',
     file: 'd',
     piece: ''
   },
   {
     rank: '3',
     file: 'e',
     piece: ''
   },
   {
     rank: '3',
     file: 'f',
     piece: ''
   },
   {
     rank: '3',
     file: 'g',
     piece: ''
   },
   {
     rank: '3',
     file: 'h',
     piece: ''
   },
   {
     rank: '4',
     file: 'a',
     piece: ''
   },
   {
     rank: '4',
     file: 'b',
     piece: ''
   },
   {
     rank: '4',
     file: 'c',
     piece: ''
   },
   {
     rank: '4',
     file: 'd',
     piece: ''
   },
   {
     rank: '4',
     file: 'e',
     piece: ''
   },
   {
     rank: '4',
     file: 'f',
     piece: ''
   },
   {
     rank: '4',
     file: 'g',
     piece: ''
   },
   {
     rank: '4',
     file: 'h',
     piece: ''
   },
   {
     rank: '5',
     file: 'a',
     piece: ''
   },
   {
     rank: '5',
     file: 'b',
     piece: ''
   },
   {
     rank: '5',
     file: 'c',
     piece: ''
   },
   {
     rank: '5',
     file: 'd',
     piece: ''
   },
   {
     rank: '5',
     file: 'e',
     piece: ''
   },
   {
     rank: '5',
     file: 'f',
     piece: ''
   },
   {
     rank: '5',
     file: 'g',
     piece: ''
   },
   {
     rank: '5',
     file: 'h',
     piece: ''
   },
   {
     rank: '6',
     file: 'a',
     piece: ''
   },
   {
     rank: '6',
     file: 'b',
     piece: ''
   },
   {
     rank: '6',
     file: 'c',
     piece: ''
   },
   {
     rank: '6',
     file: 'd',
     piece: ''
   },
   {
     rank: '6',
     file: 'e',
     piece: ''
   },
   {
     rank: '6',
     file: 'f',
     piece: ''
   },
   {
     rank: '6',
     file: 'g',
     piece: ''
   },
   {
     rank: '6',
     file: 'h',
     piece: ''
   },
   {
     rank: '7',
     file: 'a',
     piece: 'pawn'
   },
   {
     rank: '7',
     file: 'b',
     piece: 'pawn'
   },
   {
     rank: '7',
     file: 'c',
     piece: 'pawn'
   },
   {
     rank: '7',
     file: 'd',
     piece: 'pawn'
   },
   {
     rank: '7',
     file: 'e',
     piece: 'pawn'
   },
   {
     rank: '7',
     file: 'f',
     piece: 'pawn'
   },
   {
     rank: '7',
     file: 'g',
     piece: 'pawn'
   },
   {
     rank: '7',
     file: 'h',
     piece: 'pawn'
   },
   {
     rank: '8',
     file: 'a',
     piece: 'rook'
   },
   {
     rank: '8',
     file: 'b',
     piece: 'knight'
   },
   {
     rank: '8',
     file: 'c',
     piece: 'bishop'
   },
   {
     rank: '8',
     file: 'd',
     piece: 'queen'
   },
   {
     rank: '8',
     file: 'e',
     piece: 'king'
   },
   {
     rank: '8',
     file: 'f',
     piece: 'bishop'
   },
   {
     rank: '8',
     file: 'g',
     piece: 'knight'
   },
   {
     rank: '8',
     file: 'h',
     piece: 'rook'
   },
 ])

 const flipBoard = () => {
   turn === 'white' ? setTurn('black') : setTurn('white');
 }

  return (
    <div className='App'>
        <h1>Turn: {turn}</h1>
        <Container> 
          <Board style={{display:'flex', flexDirection: turn === 'white' ? 'column' : 'column-reverse'}}>
            <Rank starting={8} turn={turn} position={position}/>
            <Rank starting={7} turn={turn} position={position}/>
            <Rank starting={6} turn={turn} position={position}/>
            <Rank starting={5} turn={turn} position={position}/>
            <Rank starting={4} turn={turn} position={position}/>
            <Rank starting={3} turn={turn} position={position}/>
            <Rank starting={2} turn={turn} position={position}/>
            <Rank starting={1} turn={turn} position={position}/>
          </Board>
        </Container>
        <button onClick={flipBoard}>Change Turn</button>
    </div>
  );
}

const Board = styled.div`
  margin: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
`

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 50px auto;
`


export default App;