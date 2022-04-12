let quadraticEquation = (a, b, c) => {                                 ////Код я украл с гугла, не совсем понял как работает данная прога, увы автор данного кода не объяснил.
  if(a == 0)
      return false;
  let res = {};
  let D = b * b - 4 * a * c;
  console.log('D = ' + D);
  if(D < 0)
      return false;
  res['дискриминант'] = D;
  if(D == 0)
      res["квадратные корни"] = (-b + Math.sqrt(D)) / (2 * a);
  else if(D > 0){
      let tmp = [];
      tmp.push((-b + Math.sqrt(D)) / (2 * a));
      tmp.push((-b - Math.sqrt(D)) / (2 * a));
      res["квадратные корни"] = tmp;
  }
  return res;
}
console.log(quadraticEquation(1,12,36));