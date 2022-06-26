let plusTwo x = x + 2;
let tripple x = x * 3;
let func = plusTwo >> tripple;
printfn "Data is %d " (func 2)