const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = result.input.split(' '); 
    a.sort( (a,b) => {
        return b - a;
    })
    console.log(a[0]);
  
});
