const unrolledDice = [ ["B", "K", "N", "S", "X", "Z"],
                       ["I", "I", "N", "N", "O", "Y"],
                       ["F", "G", "K", "P", "P", "V"],
                       ["D", "G", "G", "L", "R", "R"],
                       ["C", "C", "M", "S", "T", "T"],
                       ["D", "F", "L", "L", "R", "W"],
                       ["A", "A", "E", "E", "O", "O"],
                       ["A", "E", "I", "O", "U", "U"],
                       ["H", "H", "P", "T", "T", "W"],
                       ["B", "L", "L", "M", "M", "Y"],
                       ["B", "C", "C", "D", "T", "J"],
                       ["H", "H", "N", "N", "R", "R"]
]
export function rollDice() {
    let rolledDice = [];
        for (const dice of unrolledDice) {
            let letterIdx = Math.floor(Math.random() * 6);
            let newDice = dice[letterIdx];
            rolledDice.push(newDice)
        }
        return rolledDice;

}
export default function Dice() {
    return (
        <div class="dice">
        </div>
    );
}
