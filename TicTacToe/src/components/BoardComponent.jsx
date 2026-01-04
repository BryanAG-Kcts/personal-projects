import { useEffect, useState } from "react";
import { Square } from "./SquareComponent";
import { ModalWinner } from "./ModalComponent";
import confetti from "canvas-confetti";
import { combos, characters } from "./InfoConstants";

export const Board = () => {
    const [boardPositons, setboardPositon] = useState(()=> {
        const boardStorage = window.localStorage.getItem('board');

        return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null)
    })

    const [turnSelector, setTurnSelector] = useState(()=> {
        const turnStorage = window.localStorage.getItem('turn');
        return turnStorage === "true" ? true : false
    })

    const [winner, setWinner] = useState(null)

    const resetGame = () => {
        setboardPositon(Array(9).fill(null))
        setTurnSelector(false)
        setWinner(null)

        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turn')

    }

    const checkWinner = board => {
        for(const combo of combos){
            const [a, b, c] = combo;

            if(
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ){
                setWinner(board[a]);
                confetti()
                return 
            }
        }

        let filterBoard = board.filter(pos => pos === null)    
        if(filterBoard.length === 0) {
            setWinner("?")
        }

    }

    useEffect(() => {
        checkWinner(boardPositons)
    }, [])

    const changeCharacterturn = index => {
        if(boardPositons[index] || winner) return

        const playerPosition = Number(turnSelector);
        const newBoard = [...boardPositons];
        newBoard[index] = characters[playerPosition];

        window.localStorage.setItem('board', JSON.stringify(newBoard))
        window.localStorage.setItem('turn', !turnSelector)

        setboardPositon(newBoard)
        setTurnSelector(!turnSelector);
        checkWinner(newBoard)
    }

    return(
        <>
            <main className="flex flex-col items-center gap-5">

                <div className="grid w-64 h-64 grid-cols-3 grid-rows-3 border-4 border-black rounded-md">
                    {
                        boardPositons.map((boardPosiiton, index) => {
                            return <Square 
                                key={index}
                                boardPosition={boardPosiiton}
                                index={index}
                                changeCharacterturn={changeCharacterturn}
                            />
                        })
                    }
                </div>  

                <p>turno de : {characters[Number(turnSelector)]}</p>

                <button onClick={resetGame} className="px-5 py-2 border-2 border-black rounded bg-dark-beige">¿Empezar de nuevo?</button>

            </main>

            <ModalWinner resetGame={resetGame} winner={winner}/> 
            <h1 className="absolute -translate-x-1/2 left-1/2 bottom-4">Tic Tac Toe</h1>

        </>
    )
}