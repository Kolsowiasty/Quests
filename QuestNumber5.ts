function WordFinder(firstArray: string[], secondArray: string): string[]
{
  const foundString = firstArray.find(string => string.includes(secondArray));
  return foundString;
}

const inArray: string[] = ["dwa", "kot3", "akot2"];
const Word: string = "kot";
const Result: string = WordFinder(inArray,Word);

if (Result) {
  console.log(Result);  
} else {
  console.log("Haven't found anything");
}
