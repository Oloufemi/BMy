const urlBitcoin = 'http://blockchain.info/ticker';
let urlGold = 'https://www.goldapi.io/api/';

// Create our request
let request = new XMLHttpRequest();

function getGoldPrice() {
  console.log('gold');
  urlGold = `${urlGold}XAU/USD`;
  request.open('GET', urlGold);
  request.responseType = 'json';
  request.setRequestHeader('x-access-token', 'goldapi-16u8qeukohetld6-io');
  request.send();
  request.onload = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let response = request.response;
        const goldPrice = (response.price / 1.22).toFixed(2);
        document.querySelector('#goldPrice').textContent = goldPrice;
      }
    }
  };
}

function getBitcoinPrice() {
  console.log('bitcoin');
  request.open('GET', urlBitcoin);
  request.responseType = 'json';
  request.send();
  request.onload = () => {
    if (request.readyState === XMLHttpRequest.DONE) {
      if (request.status === 200) {
        let response = request.response;
        let bitCoinInEuro = response.EUR.last;
        document.querySelector('#bitcoinPrice').textContent = bitCoinInEuro;
      }
    }
  };
}

setInterval(getBitcoinPrice, 20000);
console.log('tttt');
setInterval(getGoldPrice, 60000);
