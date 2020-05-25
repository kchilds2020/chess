import React from 'react';
import '../App.css';
import Square from './Square'

export default function Squares({position, updateBoard,updatePlayer}){
    console.log(position);
    let odd = true;
    let color;
    let row = 7;
    let col = 0;
    const sqrs = [];
          for(let i = 0; i < 64; i++){
            
            if(i % 8 !== 0 || i === 0){
              odd === true ? color = 'tan' : color = 'rgb(110, 161, 110)';
              odd === true ? odd = false : odd = true;  
            }else{
              col = 0;
              row--;
            }
            
            sqrs.push(<Square key={i} bgrdColor={color} square={position[row][col]} squares={position} updateBoard={updateBoard} updatePlayer = {updatePlayer}/>);
            col++;
          }
    return sqrs;
  }