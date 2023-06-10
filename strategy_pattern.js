function blackFriday(originalPrice) {
  return originalPrice * 0.2;
}

function defaultPrice(originalPrice) {
  return originalPrice;
}

const getPriceStrategy = {
  blackFriday,
  defaultPrice,
};

function getPrice(originalPrice, typePromotion) {
  return getPriceStrategy[typePromotion](originalPrice);
}

console.log(">>>>> price: ", getPrice(200, "blackFriday"));
