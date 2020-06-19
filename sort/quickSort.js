const quickSort1 = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  //取基准点
  const midIndex = Math.floor(arr.length / 2);

  //取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
  const valArr = arr.splice(midIndex, 1);

  const midIndexVal = valArr[0];

  const left = []; //存放比基准点小的数组
  const right = []; //存放比基准点大的数组

  //遍历数组，进行判断分配
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]); //比基准点小的放在左边数组
    } else {
      right.push(arr[i]); //比基准点大的放在右边数组
    }
  }

  //递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
  return quickSort1(left).concat(midIndexVal, quickSort1(right));
};


function quickSort(arr,left = 0,right = arr.length -1){
  // 如果数组只有一项，是不需要进行排序的。
  if(arr.length <=1){
    return arr;
  }
  // 每次递归分区，数组总是不变，变化的是传入的指针位置，这样就巧妙的代替了两个空数组
  const nextPointer = partition(arr,left,right);

  // 当left左指针小于右指针时，递归调用
  if(left < nextPointer-1){
    quickSort(arr, left, nextPointer-1);
  }

  // 此时 nextPointer 相当于拆分后数组的右数组的左指针
  if(nextPointer < right){
    quickSort(arr, nextPointer, right);
  }

  return arr;
}

function partition(arr,left,right){
  // 获取基准值
  let pivotVal = arr[Math.floor(left + (right-left)/2)];

  let leftPoint = left;
  let rightPoint = right;

  while(leftPoint<=rightPoint){
    while(arr[leftPoint] < pivotVal){
      leftPoint ++; // 左指针指向的值 小于 基准值时 向前走一格;
    }

    while(arr[rightPoint] > pivotVal){
      rightPoint --; // 右指针指向的值 大于 基准值时 向左走一格;
    }

    // 左指针小于等于右指针时，才进行交换位置
    if(leftPoint<=rightPoint){
      // 解构赋值交换数组位置
      [arr[leftPoint], arr[rightPoint]] = [arr[rightPoint], arr[leftPoint]];
      // 每次交换完位置后，指针都移动到下一位
      leftPoint ++;
      rightPoint --;
    }
  }

  return leftPoint;
}


console.log(quickSort([5, 1, 3, 6, 8, 0, 7]));
