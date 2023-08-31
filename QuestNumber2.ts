function rptString(text: string, count: number): string
{
    return text.repeat(count);
}

const inputText = "kot";
const repeatCount = 3;
const end = rptString(inputText, repeatCount);

console.log(end); 
