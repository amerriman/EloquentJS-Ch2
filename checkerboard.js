for (var row = 0; row < 8; row++){

var line = ""

for (var column = 0; column < 8; column++) {

  var total = row + column;

  if (total % 2 === 0){
    line += " "
  }
  else {
  line += "#";
  //above is same as line = line +#
  }
  //if you put console.log here it will produce like a triangle?
  //console.log("state of the line", line)
}
console.log(line)
}

//Here is a way to try and see it differently


for (var row = 0; row < 2; row++){
    var line = ""
    for (var column = 0; column < 3; column++) {
        var total = row + column;
        //This is adding the rows and columns varaible and then below it's saying that if the rows and columns total is an odd number print one thing, and if it;s even print another!
        console.log("row", row)
        console.log("column", column)
         console.log("total", total )
        if (total % 2 === 0){
            line += "a"}
        else {
            line += "b";}
    }
console.log(line)
}

// // for (var row = 1; row < 2; row++){
//
// // var line = ""
//
// // for (var column = 0; column < 8; column++) {
// //   if (column % 2 === 0){
// //     line += " "
// //   }
// //   else {
// //   line += "#"
// //   //above is same as line = line +#
// //   }
// //   //if you put console.log here it will produce like a triangle, but with two loops through, so each line of the triangle will run twice?
// //   console.log("state of the line", line)
// // }
// // //console.log(line)
// // }
//
// for (var row = 1; row < 2; row++){
//
// var line = ""
//
// for (var column = 0; column < 8; column++) {
//   if (column % 2 === 0){
//     line += " "
//   }
//   else {
//   line += "#"
//   //above is same as line = line +#
//   }
//   //if you put console.log here it will produce like a triangle?
//   //console.log("state of the line", line)
// }
// console.log(line)
// }
