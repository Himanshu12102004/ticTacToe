function generateRandomSixDigitNumber() {
  const min = 100000; // Minimum 6-digit number (100000)
  const max = 999999; // Maximum 6-digit number (999999)

  // Generate a random number between min and max (inclusive)
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return "" + randomNumber;
}
module.exports = generateRandomSixDigitNumber;
