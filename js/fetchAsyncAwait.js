fetch('http://cloud4it.com.br/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {    
            return responseStream.json();
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Erro: ', err);
    });


// ES7 - Async / Await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('http://cloud4it.com.br/data.json')
        .then(responseStream => responseStream.json())
    ]);

    return data;
}

simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});