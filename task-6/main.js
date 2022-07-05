const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseFloat(result.input.split(',')[0]);
    let b = parseFloat(result.input.split(',')[1])
    function triangle(a,b) {
        return a*b;
    }
    console.log(triangle(a,b)); 
  
});
