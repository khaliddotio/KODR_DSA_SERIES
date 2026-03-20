// Accept the parameters and calculate the Compound Interest & print it on STDOUT (UseMath class methods)

function compoundInteres(p, r, t){
 let amount = p*(Math.pow(1+(r/100),t))
 let ci = amount - p
 console.log(`CI = ${ci}`)
}
compoundInteres(10000, 5, 2)

