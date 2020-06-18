function selectSort(arr){
  const len = arr.length; // 缓存数组长度
  let minIndex;

  for(let i=0;i<len - 1;i++){

    minIndex = i; // 最小值的位置，先定位数组的第一个

    for(let j=i;j<len;j++){
      // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
      if(arr[j]<arr[minIndex]){
        minIndex = j;
      }
    }

    // 如果最小值的位置，不是初始化时的位置，就可以进行交换了。
    if(minIndex !== i){
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

  }

  return arr;
}

console.log(selectSort([3,5,8,1,4]));
