export const Square  = ({boardPosition, index, changeCharacterturn}) => {
    return(
        <span onClick={() => changeCharacterturn(index)} className="w-full h-full border-4 border-black grid place-content-center text-4xl">
            {boardPosition}
        </span>
    )
}