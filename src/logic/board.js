import { WINNER_COMBOS } from '../constants'

export const checkWinnerFrom = (boardToCheck) => {
   //revisamos si hay ganador con todas las combinaciones
   //para ver si X u O gano
   for (const combo of WINNER_COMBOS) {
     const [a, b, c] = combo
     if (
       boardToCheck[a] &&
       boardToCheck[a] === boardToCheck[b] &&
       boardToCheck[a] === boardToCheck[c]
     ) {
       return boardToCheck[a]
     }
   }
 //si no hay ganador
   return null
 }

 export const checkEndGame = (newBoard) => {
  //revisamos si hay un empate
  //si no hay mas espacios vacios
  //en el tablero
  return newBoard.every((square) => square !== null)
}