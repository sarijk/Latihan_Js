const foods = ['Bakso', 'Rawon', 'Soto', 'Seblak'];
//saya mau menampilkan isi dari array foods yang memiliki index2
//console.log(foods[2]);

// console.log(...foods);

// const food1 = foods[0];
// const food2 = foods[1];
// const food3 = foods[2];
// const food4= foods[3];
// console.log(food1, food2, food3, food4);

//menghapus dari index 0 sebanyak 1 elemen
// foods.splice(0,1);
// console.log(foods);

//Destructuring Array


const profile ={
    firstName: 'John',
    lastName: 'Doe',
    age: 18,
}

const capital = new Map([
    ['Jakarta', 'Indonesia'],
    ['London', 'England'],
    ['Tokyo', 'Japan'],
]);

/*output: 3*/
// console.log(capital.size);

/*output: England
    Kalau value-nya yang dipanggil output undefined */
// console.log(capital.get('London'));

/* output: Turkey
    Menambahkan key-value baru lalu menampilkan value barunya */
// capital.set('Ankara', 'Turkey');
// console.log(capital.get('Ankara'));

