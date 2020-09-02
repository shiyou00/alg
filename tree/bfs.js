const tree = {
  value:"a",
  children:[
    {
      value:"b",
      children:[
        {
          value:"e",
          children:[
            {
              value:"h",
              children:[]
            }
          ]
        }
      ]
    },
    {
      value:"c",
      children:[
        {
          value:"f",
          children:[]
        }
      ]
    },
    {
      value:"d",
      children:[
        {
          value:"g",
          children:[]
        }
      ]
    }
  ]
}

const bfs = (root)=>{
  const stack = [root];
  while (stack.length > 0){
    const node = stack.shift();
    node.children.forEach((item)=> stack.push(item));
    console.log(node.value);
  }
}

bfs(tree);
