var arr = [51,2,5,8,1,3,5,10,13,3,5,8]; 
//var arr = [];
var mx = isArr(arr) ? maxDiff(arr) : 'non existed, because array is empty!';
console.log('max diff is :', mx)

function maxDiff(arr){
  var min = arr[0], max = arr[0];
  
  arr.map(el =>{
    if(min > el) min = el;
    if(max < el) max = el;
  })
  
  return max - min;
}

function isArr(arr) {
  return arr.length > 0;
}