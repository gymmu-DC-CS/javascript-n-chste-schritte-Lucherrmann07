export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e") {
    if (currentElement != "E") { 
    result.push(currentElement)
    }
    }
  }
  return result.join("") 
}
export function aufgabe02(args) {
  const input = args
  const result = input.toUpperCase()
  return result
}

export function aufgabe03(args) {
  const input = args
  const result = 0 

for (let i = 0; i < input.length; i++)  {
  const currentElement = input[i]
  if (currentElement === "e" || currentElement === "E") { 
    result++
  }
  }
  return result
  }

  export function aufgabe04(args) {
          const cleanText = args.replace(/[^\w\s!]/gi,'');
          const words = cleanText.split(/\s+/);
          
          return words.length;
  }
  export function aufgabe05(args) {

    const input = args
    if (input.toLowerCase() === input) {
      return false
    }else {
      return true
    }
    }

    export function aufgabe12(args) {
      const input = args
      let result = -1

      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        if (currentElement === "e") {
          result = i
          break
        }
      }
    }
