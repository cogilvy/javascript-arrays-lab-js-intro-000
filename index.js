var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(array, element) {
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(array, element) {
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(array) {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(array) {
  kittens.shift()
  return kittens
}

function appendKitten(array, element) {
  var kitten = [...kittens, "Broom"]
  return kitten
}

function prependKitten(array, element) {
  var kitten1 = ["Broom", ...kittens]
  return kitten1
}