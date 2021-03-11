function main () {
    var firstNum; 
    var secondNum; 
    var thirdNum;

    myX = 6;
    myY = 25;
    myZ = 5.2;
    
    myX *= 9;
    myY /= 5;
    myZ *= 10;

    return {
    myX,
    myY,
    myZ
    
    };

    }
       
   
    console.log(main());
    module.exports = main