function FindNumber(a: number, b: number, c: number): number
{
  return Math.max(a, b, c);
}

const var1 = 43;
const var2 = 72;
const var3 = 55;

const HighestNumber = FindNumber(var1, var2, var3);
console.log(HighestNumber);  
