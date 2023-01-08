import { LightningElement } from 'lwc';

export default class SimpleCalc extends LightningElement {
    currentResult;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        } else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }
    //Function to handle add
    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}+${secondN} is ${firstN+secondN}`;
    }
    //Function to handle Subtract
    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}-${secondN} is ${firstN+secondN}`;
    }
    //Function to handle Multiply
    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}x${secondN} is ${firstN*secondN}`;
    }
    // Function to handle divide
    divisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        this.currentResult = `Result of ${firstN}/${secondN} is ${firstN/secondN}`;
    }
}