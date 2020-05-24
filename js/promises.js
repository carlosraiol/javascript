const fs = require('fs')
const path = require('path')
const basePath = './js/assets/'
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

function read(index) {
    return readFileAsync(path.resolve(basePath, `text${index}.txt`), { encoding: 'utf8'})
}
console.log('Begin')
const promiseArray = []

for(let i = 1; i < 4; i++) promiseArray[i - 1] = read(i)

Promise.all(promiseArray).then((arr) => console.log (arr.join('\n')))

//readFileAsync(path.resolve(basePath, 'textComplete.txt'), { encoding: 'utf-8'})
//.then(console.log)
//.catch(console.error)
//.finally(() => console.log('End'))



//const coinflip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Ops'))

//console.log('Begin')

//coinflip.then((data) => console.log(data))
//.catch((err) => { throw err })
//.then(() => console.log('End1'))

//new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))

//coinflip.then((data) => console.log('Yay 1'))
//.catch(() => console.log('First Catch'))
//.then(() => console.log('Result'))
//.catch((err) => console.error('Error in first case, next then will not execute'))
//.then(() => console.log('End1'))

/*const coinflip = new Promise(
    (resolve, reject) => setTimeout(() => Math.random() > 0.5 ? resolve('Yay') : reject('Ops'), 2000)
)

const p = Promise.resolve('resolve').then(coinflip)

p.then(console.log).catch(() => console.log('error'))*/