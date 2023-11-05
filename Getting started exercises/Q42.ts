const MagicNames: string[]=["David Blanie","Harry Houdini","Uri Geller"];

function show_magicians(MNames:string[]): void{
    for(const name of MNames){
        console.log(name);
    }
}

function make_great(MNames:string[]): string[]{
    const makegreat:string[]=MNames.map(MNames=> "Honorable Great "+MNames);
    return makegreat;
}

const greatnames:string[]=make_great(MagicNames);

console.log("True OG Magicians: ");
show_magicians(MagicNames);

console.log("\nGreat Magicians!: ");
show_magicians(greatnames);