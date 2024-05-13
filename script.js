var d = new Promise((resolve, reject) => {
    

    setTimeout(() => {
        if (true) {
            resolve('hello world');
        } else {
            reject('heehaw');
        }
    }, 2000)
}); 

// d.then((data) => console.log('success : ', data), (error) => {
//     console.error('New Error Msg : ', error);
// });

d.then((data) => {
        console.log('success : ', data)
        throw new Error('Eat the cheese');
        return 'your mum';
    }).
    then((data) => {
        console.log('success 2 : ', data);
        
    }).
    catch((error) => console.error('error : ', error));