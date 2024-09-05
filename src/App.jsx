import { useState } from 'react';

function Square({value, onSquareClick}){
    return (
        <button className='square' onClick={onSquareClick}>{value}</button>
    );
}
function Board({xIsNext, Square, onPlay}){
    function handleClick(j){
        if(calculatwinner(Square) || Square[]){
            return;
        }
        const nextSquares = square.slice();
        if(xIsNext){
            nextSquares[j] = 'x';
        }else{
            nextSquares[j] ='0';
        }
        onPlay(nextSquares);
    }
    const winner = calculatwinner(squares);
    let status;
    if(winner){
        status = 'Winner:' + winner;
    }else{
        status = 'Next player: ' + (xIsNext ? 'X' : '0');
    }
    return (
        <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>

        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>

        </div>
        <div className="board-row"></div>
    
        </>
    );    
}
