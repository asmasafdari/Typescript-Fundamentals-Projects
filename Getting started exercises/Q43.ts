const MagicName: string[]=["David Blanie","Harry Houdini","Uri Geller"];

function shows_magicians(MNames:string[]): void{
    for(const name of MNames){
        console.log(name);
    }
}

function making_great(MNames:string[]): string[]{
    const makegreat:string[]=MNames.map(MNames=> "Honorable Great "+MNames);
    return makegreat;
}

const Greatnames:string[]=making_great(MagicName);

console.log("True OG Magicians: ");
shows_magicians(MagicName);

console.log("\nGreat Magicians!: ");
shows_magicians(Greatnames);