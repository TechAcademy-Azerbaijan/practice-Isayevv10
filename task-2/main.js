const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let num = parseInt(result.input);
        function prime(num) {
            if (num <= 1) { 
                return "No";
            } else {
                for (var i = 2; i < num; i++) {
                    if (num % i === 0) {
                        return "No"; 
                    }
                }
                return "Yes";
            }  
        }
        console.log(prime(num));
  
});
