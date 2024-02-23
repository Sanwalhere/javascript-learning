/*

With an adjacency list, we only need to store the values for the edges that exist. With adjacency matrix,
you store values irrespective of whether an edge exists or not. Storage wise, an adjacency list is way more efficient
 
With adjacency list, inserting and finding adjacent nodes is constant time complexity whereas with adjacency matrix,
it is linear time complexity.  

An adjacency list allows you to store additional values with an edge such as weight of the edge. With adjacency matrix,
such information would have to be stored externally

*/

const adjacency = {
  A: ["B"],
  B: ["A", "B"],
  C: ["B"],
};

console.log(adjacency["A"]);
