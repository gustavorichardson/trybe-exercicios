let a = 20
let b = 60  
let c = 60

let invalido = a > 0 && b > 0 && c > 0

if(invalido){
  if(a + b + c === 180){
    console.log(true)
  } else{
    console.log(false)
  }
} else{
  console.log("Angulo Invalido")
}
