const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let num = parseInt(result.input);
        function prime(num) {
            if (num <= 1) { 
                return false;
            } else {
                for (var i = 2; i < num; i++) {
                    if (num % i === 0) {
                        return false; 
                    }
                }
                return true;
            }  
        }
        
        console.log(prime(num));
  
});
