let a = [8, 9, 1],                                 // Первое решение
    b = [4, 6, 12];

     console.log(a.length === b.length && a.every((n, i) => n === b[i]));


     function compareArrays(arr1, arr2) {          // Второе решение 
      if (arr1.length != arr2.length) {
          return false;
      } else { 

          let result = false;
          
          for (let i=0; i<arr1.length; i++) {
                if(arr1[i] != arr2[i]) {
                  return false;
              } else {
                result = true;
              }
  
          }
          return result;  
    }
  
  }
  
  const array1 = [8, 9, 1];
  const array2 = [4, 6, 12];
  
  const result = compareArrays(array1, array2);
  if (result) {
      console.log('true');
  } else {
      console.log('false');
  }


  


  const arr = [9, -10, 30, -44];                       // Второе Задание  

function advancedFilter() {
  
  const result = arr.filter(item => item % 3 === 0)
            .sort((a, b) => a - b)
            .map((a) => a * 10);
             console.log(result);
}


advancedFilter();