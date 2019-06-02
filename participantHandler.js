var container = document.getElementById("participants");
var participant = document.getElementsByClassName("participant");
var carrier = document.getElementById("carrierInput");

var participantsParsed;

var num;


function getParticipants() {

  'use strict';

  var carrier_value = localStorage.getItem("carrierValue");

  participantsParsed = JSON.parse(carrier_value);

  console.log(participantsParsed);

};

function showParticipants(){

  getParticipants();

  var count;

  var parsedNames;
  var parsedAges;
  var parsedMarkup;

  var jsonNameArray = [];
  var jsonAgeArray = [];

  for(num in participantsParsed){

    parsedMarkup = participantsParsed[num].markup;
    parsedNames = participantsParsed[num].name;
    parsedAges = participantsParsed[num].age;

    jsonNameArray.push(parsedNames);
    jsonAgeArray.push(parsedAges);

  }

  if(participantsParsed !== null){

    container.innerHTML = "";

    count = Object.keys(participantsParsed).length;

    console.log("number of participants:", count);

    for (var i = 0; i < count; i++) {

      container.innerHTML += "" + parsedMarkup + "";

    }

    var nameInput = document.querySelectorAll(".input-name");
    var ageInput = document.querySelectorAll(".input-age");

    for (var i = 0; i < nameInput.length; i++) {
      nameInput[i].value = "" + jsonNameArray[i] + "";
    }

    for (var i = 0; i < ageInput.length; i++) {
      ageInput[i].value = "" + jsonAgeArray[i] + "";
    }

  }else{
    createParticipant();
  }
}
function removeParticipant(){

}
// creates template for participants
var newParticipant;

function createParticipant(){

  newParticipant = document.createElement('div');
  newParticipant.setAttribute("class","participant");

  var inputText = ["name","age"];

  inputText.forEach(function(el){
    var labels = document.createElement('label');
    labels.htmlFor = el;
    labels.innerHTML = el;
    newParticipant.appendChild(labels);
  })

  inputText.forEach(function(el){
    var inputs = document.createElement('input');
    inputs.type = 'text';
    inputs.setAttribute("class","input-" + el +"");
    newParticipant.appendChild(inputs);
  })

  var removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.setAttribute("class","removeBtn");
  removeBtn.innerText = 'remove';
  removeBtn.addEventListener('click',removeParticipant,false);

  // newParticipant.appendChild(removeBtn);
  // newParticipant.innerHTML = removeBtn;
  container.appendChild(newParticipant);
}

console.log(newParticipant);

function addParticipant(){

  container.appendChild(newParticipant);

}

function storeParticipants() {

  getParticipants();

  var participants = {};

  for (var i = 0; i < participant.length; i++) {

    var participantName = participant[i].querySelectorAll(".input-name")[0].value;
    var participantAge = participant[i].querySelectorAll(".input-age")[0].value;
    var participantMarkup = participant[i].outerHTML;
    var participantX = "participant"+i+"";

    participants[participantX] = {"id" : ""+i+"", "name": participantName, "age": participantAge, "markup" : participantMarkup };

  }

  var participantsStr = JSON.stringify(participants);

  console.log(participantsStr);

  carrier.value = participantsStr;

  localStorage.setItem("carrierValue", carrier.value);

  carrier.value = "";

  location.reload();
}
//



window.onload = showParticipants();
