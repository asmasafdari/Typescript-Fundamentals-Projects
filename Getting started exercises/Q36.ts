const make_Shirt=(size:string,message:string):string =>
{
    console.log("Size: "+size+", Message: "+message);
    return "size: "+size+", Message: ";
}

let size:string = "S";
let message: string = "PIAIC GENERATIVE AI"

make_Shirt(size,message);  //made with variables

make_Shirt("XL","PAIAC WEB 3.0")  // direct function

export{}