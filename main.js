//======== total calculator ================
var priceElement = document.getElementsByClassName("price"),
    totalPriceElement = document.getElementById("total");
var arrayOfPrices = [];
(function() {
  'use strict';

  for (var i = 0; i < priceElement.length; i++) {

    var priceAttr = priceElement[i].innerHTML;

    priceAttr = priceAttr.substr(1,priceAttr.length);

    priceElement[i].setAttribute("value",priceAttr)

  }

  // ========================================================
  for (var i = 0; i < priceElement.length; i++) {

    arrayOfPrices.push(priceElement[i].getAttribute('value'))

  }
  // console.log("array of prices : " + arrayOfPrices);

}());

function recalcTotal() {

  var total = 0;

  for (var i = 0; i < priceElement.length; i++) {

    var count = document.getElementById("input" + (i+1) +"").value;

    var pricePerUnit = priceElement[i].getAttribute('value');

    total += count * pricePerUnit;
  }

  // console.log("total price is... : " + total);

  totalPriceElement.innerHTML = "$" + total + "";
}

//==== add participants =====

function addParticipant(){
  var x = document.getElementById("participants");
  var participant = document.getElementsByClassName("participant");

  for (var i = 0; i < participant.length; i++) {
      var markup = participant[i].innerHTML;
  }
  var newParticipant = document.createElement('div');

  newParticipant.setAttribute("class","participant");

  newParticipant.innerHTML = markup;

  x.appendChild(newParticipant);
}
