class VatFree {
  constructor() {}
  calPrices(prices) {
    return prices * 0.25;
  }
}

class Discount {
  constructor() {}
  calPrices(prices) {
    return prices * 0.1;
  }
}

class ShipFree {
  calPrices(distance) {
    return distance * 1000;
  }
}

class Shoppe {
  constructor() {
    this.vatFree = new VatFree();
    this.discount = new Discount();
    this.shipFree = new ShipFree();
  }
  calPrices(prices, distance) {
    prices += this.vatFree.calPrices(prices);
    prices -= this.discount.calPrices(prices);
    prices += this.shipFree.calPrices(distance);
    return prices;
  }
}

var shopee = new Shoppe();

console.log(`Prices:: ${shopee.calPrices(1000000, 10)}`);
