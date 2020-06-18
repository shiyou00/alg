function bubbleSortBase(arr){
  const len = arr.length;
  for(let i=0;i<len;i++){
    for(let j=0;j<len-1;j++){
      // 前一个数字 > 大于后一个数字
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]; // es6 解构赋值
      }
    }
  }
  return arr;
}

console.log(bubbleSortBase([1,5,2,4,7,8]));

function BubbleSortStable(arr) {
  const len = arr.length
  for(let i=0;i<len;i++) {
    let flag = false;
    // 注意差别在这行，我们对内层循环的范围作了限制
    for(let j=0;j<len-1-i;j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        flag = true;
      }
    }
    if(!flag) break; // 如果flag不等于true时，说明内层循环没有进行交换位置，也就是说已经排好序了，这个时候可以退出外层循环
  }
  return arr
}

console.log(BubbleSortStable([1,5,2,4,7,8]));
