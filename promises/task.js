const promise = new Promise(function(resolve, reject) {          ///Не дошел в курсе до промисов, не знал что это.
        console.log('Функция отработала!');
    
        resolve();
    })
    .then(() => {
        console.log('Промис работает верно!');
    });