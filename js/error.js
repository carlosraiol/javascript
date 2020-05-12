class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
    }
}

try{
    const name = 'Carlos Raiol';

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myError;

}catch (err) {
    if(err.data.type === 'Server error') {
        
    }
} finally {
    console.log('Keep going...');
}
