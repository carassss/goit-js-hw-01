'use strict';

function getShippingMessage(country, price, deliveryFee) {
  let totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`
}

console.log(getShippingMessage("Australia", 120, 50));