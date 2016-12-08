var readline = require('readline')

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('What drink you want ah? Lowercase please: teh o ping siew dai? kopi si gah dai? kopi o kosong gao? ', function (answer) {
  if (answer.includes('gao')) {
    console.log('concentrated')
  } else if (answer.includes(' po')) {
    console.log('diluted')
  }
  if (answer.includes('ping')) {
    console.log('iced')
  }
  if (answer.includes('tarik')) {
    console.log('pulled')
  }
  if (answer.includes('teh')) {
    console.log('tea coming right up')
  } else if (answer.includes('kopi')) {
    console.log('coffee it is')
  } else if (answer.includes('milo')) {
    console.log('hot chocolate for you')
  } else if (answer.includes('horlick')) {
    console.log('malt drink it is')
  } else if (answer.includes('barley')) {
    console.log('barley for you')
  } else if (answer.includes('bandung')) {
    console.log('rose syrup it is')
  } else if (answer.includes('kickapoo')) {
    console.log('citrus-flavoured drink coming right up')
  }
  if (answer.includes(' o')) {
    console.log('without milk')
  } else if (answer.includes(' si')) {
    console.log('with evaporated milk')
  }
  if (answer.includes('limau')) {
    console.log('with lime')
  }
  if (answer.includes('gah dai')) {
    console.log('more sugar')
  } else if (answer.includes('siew dai')) {
    console.log('less sugar')
  } else if (answer.includes('kosong')) {
    console.log('without sugar')
  }
  if (answer.includes('halia')) {
    console.log('with ginger')
  }
  rl.close()
})
