const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']



function findMatching(array, name) {

  let match = array.filter((element) => {
    if (element.toLowerCase() === name.toLowerCase()) return element
  })
return match
}
console.log(findMatching(drivers, 'Bobby'))



function fuzzyMatch(array, name) {
  let match = array.filter((element) => {
    if (name === element.substring(0, 2)) return element
  })

  return match
}
console.log(fuzzyMatch(drivers, 'Sa'))



function matchName(array, name) {
  let match = array.filter((element) => {
    if (name === element.name) {
      return element
    }
  })
  return match
}

console.log(matchName(drivers, 'Bobby'));