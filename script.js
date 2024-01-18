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
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e" || currentElement === "E") {
      result++
    }
  }
  return result
}

export function aufgabe04(args) {
  const cleanText = args.replace(/[^\w\s!]/gi, "")
  const words = cleanText.split(/\s+/)

  return words.length
}
export function aufgabe05(args) {
  const input = args
  if (input.toLowerCase() === input) {
    return false
  } else {
    return true
  }
}

export function aufgabe06(args) {
  const input = args
  if (input === "") {
    return false
  }
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].toLowerCase()
    if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
      if (currentElement.charCodeAt() != 32) {
        return true
      }
      return false
    }
  }
}

export function aufgabe07(args) {
  const input = args

  if (
    (input.indexOf("und") != -1 && input.indexOf("Und") != 0) ||
    input.indexOf("Und") === 0 ||
    input === "und"
  )
    /*Erklärung von Bedingung Zeile 68-72:- Sie überprüft ob eine der drei Bedingungen wahr ist
                                          - Wenn eine von diesen Bedingungen wahr ist, wird der Code innerhalb vom if-Block ausgeführt.
                                          - Wenn keine der Bedingungen stimmt, wird der Code im if-Block übersprungen.
    */

      return true
  else return false
}

export function aufgabe08(args) {
  const input = args

  var textMit3 = input.replace(/[e]/g, "3")

  return textMit3
}

export function aufgabe09(input) {
  return input.trim().length === 6
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
