function main (numOne, numTwo) {
    var numOne; 
    var numTwo; 
    var myQuotient = numOne / numTwo;
  
    parseFloat (numOne);
    parseFloat (numTwo);
    parseFloat (myQuotient);

    return myQuotient;  

    }
       
   
    console.log(main(5.0, 2.0));
    console.log(main(16.5, 5.5));
    console.log(main(102.0, 25.5));
    module.exports = main