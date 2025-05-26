export default function fetchBitcoinApi(elementTarget) {
  const urlBitcoinApi = "https://blockchain.info/ticker"

  const promise = fetch(urlBitcoinApi)
  const bitcoinDonationValue = document.querySelector(elementTarget)

  // console.log(bitcoinDonationValue)

  promise
    .then((response) => response.json())
    .then((json) => bitcoinDonationValue.innerText = (1000 / json.BRL.sell).toFixed(4))
    .catch((error) => console.log(Error(error)))
}
