const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let arr = result.input.split(',');
        let arr2 = arr.reverse();
        for (let item of arr2) {
            console.log(item);
        }
  
});
