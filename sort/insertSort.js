function insertSort(arr){
  const len = arr.length;

  let target;

  for(let i=0;i<len;i++){
    let index = i;
    target = arr[i];

    while(index>0 && arr[index-1] > target){
      arr[index] = arr[index-1]; // 这个步骤相当于是把前面一个值，移动到后面一位来。
      index--;
    }
    // 表明没有进入while循环，因此没有发生位置交换，就不必交换位置了。
    if(arr[index] !== target){
      arr[index] = target ; // 最后确定好的位置，放入上面保存好的值。
    }

  }

  return arr;
}

