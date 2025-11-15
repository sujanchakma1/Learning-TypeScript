let anything: any


anything = 22;

(anything as number)



const kgToGm =(input: number | string):string| Number| undefined=>{

  if(typeof input == 'number'){
    return input * 1000
  }else if(typeof input === 'string'){
    const [value] = input.split(" ")

    return Number(value) * 1000
  }
}

const result1 = kgToGm(2)
console.log(result1);

const result2 =  kgToGm("2 kg")
console.log(result2);