(function () {
    'use strict';

    //Resolução do funcional com recursão de cauda.

    function factorial(number) {
     var product = 1;

     for (var i = number; i >= 1; --i) {
        product *= i;
     }

     return product;
    }

    factorial(4);

})();
