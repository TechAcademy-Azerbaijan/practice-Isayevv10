const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let num = parseInt(result.input);
        function fibonacci(n) {
            if (n <= 1) {
                return n;
            }else {
                return fibonacci(n - 1) + fibonacci(n -2);
            }
        }
       console.log(fibonacci(num));
  
});
