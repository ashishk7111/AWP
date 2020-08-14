// Callback Functions

function abc(xyz) {
    xyz();
  }
  
 
  abc(function () {
    console.log("helloo world!!!");
  });
  
  
  abc(() => {
    
    console.log("helloo world");
  });
  
  
  let fun = function () {
    
    console.log("helllo world!!");
  };
  abc(fun);
  
  
  let fun1 = () => {
    
    console.log("hello world!!!");
  };
  abc(fun1);