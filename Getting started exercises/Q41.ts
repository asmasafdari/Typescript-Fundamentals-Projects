const Names: string[]=["David Blanie","Harry Houdini","Uri Geller"];

function show_magician(MNames:string[]): void{
    for(const name of MNames){
        console.log(name);
    }
}

show_magician(Names)