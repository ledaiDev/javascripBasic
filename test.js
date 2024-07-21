alert('Xin chao cac ban')

console.log(4+5+'a') // nó sẽ là 9a ở đây nó sẽ tính từ trái sang phải , chứ không phải là cộng chuỗi
console.log('a'+4+5) // nó sẽ là a45

let a = 'I'
console.log(a)


let b = `javascrip co ban`   // Luôn dùng `` để thực hiện mà không cần để ý bên trong nó là gì
console.log(b)   // Để xem độ dài thì dùng length nhưng nó sẽ tính cả dấu cách đầu và cuối , nếu không muốn tính dấu cách thì dùng trim()


let c = '5'
let e = +c   // Chuyển đổi chuỗi c từ string sang number
let d = 7
console.log('type c:' ,typeof c,'type d',typeof d);
console.log('type e:' ,typeof e,'type d',typeof d);


console.log(`xin chào d = ${d} 
    và e = ${e} và d + e = ${d+e}`)  // Ở đây dùng `` thì để trong chuỗi có biến thì ta sẽ dùng ${}


//Kiểu dữ liệu object (Đối tượng)

let ff  = {}; // như này là một object rỗng
// key: value
let f = {
    name :'Le Dai',
    address: 'Nam Dinh'
};

console.log('What is your name ?' , `My name's `,f.name)
console.log('where are you from ?' , `I'm from `,f.address)
console.log('Kiểu dữ liệu của f là :' , typeof f)

// Kiểu dữ liệu Array
 let gg = []; // đây là 1 array rỗng 
 let g = ['mu','real','bayern']
 console.log('Kiểu dữ liệu của g là:' , typeof g,g)
 console.log('first item :' ,g[0])   //Thường thì trong thực tế trong các array đa số là các object
 


 // Khi nào sử dụng == , === , Empty , Null,Undefined
let number1 = 5
let number2 = 5
let string = '5'
console.log('n1 =',number1 , 'n2 =', number2 , number1 == number2)
console.log('n1 =',number1 , 'st =', string , number1 == string)  
console.log('n1 =',number1 , 'st =', string , number1 === string)
// Ở đâu khi dùng == thì khi bạn so sánh giữa number và string thì hệ thống nó sẽ cố gắng chuyển đổi string sang number để so sánh
// Nhưng khi dùng === để so sánh thì nó sẽ không so sánh được number với String (Dùng 100% ===  để cho code chặt chẽ hơn)

let w = ''; // Đây là một empty (nó là rỗng)


// Vòng lặp FOR
let arr = ['A','B','C','D']

for(let i = 0; i< arr.length;i++){
    console.log('check results i= ', arr[i])
}


// if else
//Variables & Block Scope


// function 
function sum(a,b){
    return a + b;
}
console.log('sum a,b :' ,sum(10,5))


// arrow function   Giống với function nhưng đây là 1 kiểu viết ngắn gọn hơn 

let plus = (c,d) => {    // Ở đây function có thể coi là một biến nên ta có thể dùng let hoặc không dùng cũng đc , nhưng nên dùng để chặt chẽ hơn
    return c + d;
}
console.log('sum c ,d ', plus(4,3));


// callback ,setTimeout ,setInterval

// Tìm kiếm với Filter(Bộ lọc)/Find(Tìm kiếm)

let Arr = [
    {name: 'Đại' , age : 22},
    {name: 'Hào' , age : 15},
    {name: 'Vinh' , age : 22},
    {name: 'Lan' , age : 18}
]

let filter = Arr.filter((item,index)=>{
    return item && item.age === 22;
});
console.log('ds',filter)