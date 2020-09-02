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

const dfs = (node)=>{
  console.log(node.value);
  node.children.forEach(dfs);
}

dfs(tree);
