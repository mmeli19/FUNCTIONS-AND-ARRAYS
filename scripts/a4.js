/*Filename: functions and array javascript
 Author: Esther Chukwunwike
 Date: 10/18/2021
 Description: Functions and arrays javascript 
*/
var numArray = new Array(50);
        for (let i = 0; i < 50; i++) {
            //This populates the array. +1 is necessary because arrays are 0 index based and you want to store 1-100 in it, NOT 0-99.
            numArray[i] = i + 1; 
            //This prints the values that you stored in the array
            console.log(numArray[i]); 
        }
        
        //This maps the number in numArray and multiply each by 5 switching them to multiples of 5
        const num1 = numArray.map( (a) => a * 5);
        //prints the values stored in num1
        console.log(num1);

        //This maps the numbers in num1 and switches every multiple of three to zero
        const num2 = num1.map( (a) => { if ((a % 3) == 0) return 0; 
            else return a})
        //prints the values stored in num1    
        console.log(num2);
        
        //This maps the numbers in num2 and subtracts 1 from all the mutiples 10 that are greater than 1
        numArray = num2.map( (a) => { if ((a % 10) == 0 && a > 1) return (a - 1); 
            else return a})
        //numArray holds final result and this prints it
        console.log(numArray);