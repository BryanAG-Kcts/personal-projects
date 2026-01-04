export const ModalWinner = ({winner, resetGame}) => {

    if(!winner) {
        return null
    }

    return(
        <div className="absolute top-0 left-0 grid w-full h-full modalWinner place-content-center">
            <div className="flex flex-col items-center justify-center w-64 h-64 gap-5 border-4 border-black rounded bg-dark-beige">
                <p>
                    {
                        winner == "?" ? "EMPATE" : "GANADOR"
                    }
                </p>
                <span className="grid w-20 h-20 text-3xl border-4 border-black rounded place-content-center bg-light-beige">
                    {winner}
                </span>
                <button onClick={resetGame} className="px-5 py-2 border-2 border-black rounded bg-light-beige">¿Empezar de nuevo?</button>
            </div>
        </div>
    )
}