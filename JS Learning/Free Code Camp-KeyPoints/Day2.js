/*

The collection is an object containing albums, each identified by a unique ID. The function updates album properties based on given parameters.

The rules for updateRecords are:

Always return the entire records object.
If value is empty, delete the given prop property.
If prop isn't tracks and value isn't empty, assign value to the album's prop.
If prop is tracks and value isn't empty, create an empty array and add value.
If prop is tracks and value isn't empty, add value to the end of the album's tracks array.
The recordCollection object must not be directly modified.


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  
  
  if(value === ''){
    delete records[id][prop]
  }else if(prop !== 'tracks' && value !== ''){
    records[id][prop] = value
  }else if(prop === 'tracks' && value !== ''){
    if(!records[id].hasOwnProperty('tracks')){
    records[id][prop] = []
    }
    records[id][prop].push(value)
  }
  return records;
  }

  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

-------------------------------------------------------------

change our initialization so we can count by odd numbers.
Push the odd numbers from 1 through 9 to myArray using a for loop.

// Setup
const myArray = [];

// Only change code below this line

for(let i=1; i<10; i+=2){
  myArray.push(i)
}

-------------------------------------------------------------

Let's change our initialization and final expression so we can count backwards by twos to create
an array of descending odd numbers.

Push the odd numbers from 9 through 1 to myArray using a for loop.

// Setup
const myArray = [];

// Only change code below this line

for(let i=9; i>=1; i -= 2){
  myArray.push(i)
}

-------------------------------------------------------------

multiplyAll([[1], [2], [3]]) should return 6
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) should return 5040
multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) should return 54

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      product *= arr[i][j]
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

*/
