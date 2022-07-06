const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let num = parseInt(result.input);
        function prime(num) {
            if (num <= 1) { 
                return "NO";
            } else {
                for (var i = 2; i < num; i++) {
                    if (num % i === 0) {
                        return "NO"; 
                    }
                }
                return "YES";
            }  
        }
        console.log(prime(num));
  
});
