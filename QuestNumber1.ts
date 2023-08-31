function dupeString(input: string): string;
{
    return input + input;
}

const originalString = "kot";
const dupedString = dupeString(originalString);

console.log(dupedString);
