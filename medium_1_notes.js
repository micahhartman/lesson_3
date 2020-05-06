function isAnIpNumber(number) {
	if (number >= 0  && number <= 255) {
		return true;
	} else {
		return false;
	}
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = []
  	dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
  	return false;
  	}
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
    	return false;
  } 
}
  return true;
}

console.log(isDotSeparatedIpAddress('23.45.30.5.500'));

