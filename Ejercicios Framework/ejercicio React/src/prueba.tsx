export const Comp= ()=> {
type Dice = 1 | 2 | 3 | 4 | 5 | 6;
const throwDice = (): Dice => {
  return Math.ceil(Math.random() * 6) as Dice;
  // return 6; // Dado trucado MUAHAHAHAHA.
};
};