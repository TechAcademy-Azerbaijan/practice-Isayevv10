const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let num = parseInt(result.input);
        for (let i = 1; i < num; i++) {
            if ((i*i) < num) {
                console.log(i*i);
            }
        }
  
});
