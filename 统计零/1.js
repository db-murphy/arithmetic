// 统计从1到n的零总数？
function countZero(n){
  var count = 0;
  while(n>0){
   count += Math.floor(n/10);
   n = n/10;
  }
  return count;
}

var count = countZero(200);

console.log(count);
