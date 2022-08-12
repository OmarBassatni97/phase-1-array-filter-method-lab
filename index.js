// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, name){
   const result = array.filter(element => element == name)
   return result
}

console.log(findMatching(drivers,"Bobby"))

function fuzzyMatch(array,string){

    const result = array.filter(element => element.startsWith(string))
    return result
    
}


function matchName(array,string){

    const result = array.filter(element => element.name == string)

    return result
}
