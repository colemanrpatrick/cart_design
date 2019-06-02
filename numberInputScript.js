var numberPlus = document.getElementsByClassName("numberPlus"),
    numberMinus = document.getElementsByClassName("numberMinus"),
    numberInput;

// input values are not strings or numbers, they are input

function numIncrement(numberInput, increase){

  var myInputObject = document.getElementById(numberInput);

  if (increase) {
    console.log("increased value", myInputObject.value);
    
    myInputObject.value++;

  } else {
    console.log("decreased value", myInputObject.value);

    myInputObject.value--;

  }

  if (myInputObject.value > 999) {

    myInputObject.value = 999;

  }
  if(myInputObject.value <= 0){

    myInputObject.value = '';

  }
}
