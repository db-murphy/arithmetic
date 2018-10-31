function isPrime(n){
  var divisor = 3,
      limit = Math.sqrt(n);
  //check simple cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit)
  {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2; // 加2的原因是因为在前面除2的时候已经被过滤了，既然能被偶数整除，那肯定能被2整除
  }
  return true;
}
