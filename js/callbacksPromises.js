//Promises

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('First data');
    }, 1500);
})

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function() {
        //did something
        resolve('Second data');
    }, 1000);
})
//console.log(doSomethingPromise); //Pending

Promise.race([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data);
    });
/*Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
})*/
/*
doSomethingPromise()
    .then(data => { console.log(data.split('')); return doOtherThingPromise() })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));*/
//doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error)); //Fulfilled
/**
 * Os estados da Promises 
 * Pending
 * Fulfilled
 * Rejected
*/


//Callbacks
function doSomenthing(callback) {
    setTimeout(function() {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function() {
        //did other thing
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomenthing(function(data){
            var processData = data.split('');
            try {
                doOtherThing(function(data2){
                    var processData2 = data2.split('');
                    try{
                        setTimeout(function() {
                            console.log(processData, processData2);
                        }, 1000);
                    }catch(err) {
                        //handle error
                    }
                });
            }catch(err){
                //handle error
            }
        });
    }catch(err){
       //handle error
    }
}

doAll();