
let arr=[1,2,3,4,5,6,7]
console.log(arr.splice(2,3,6,6))
console.log(arr)



//literals
const user={
   'full name':'a',
   rollno:20,
   age:18,
   subject:'a',
   'last name':'b'                    
}
user.rollno=5;
console.log(user.rollno);
console.log(user['full name'])

console.log(user['full name'])
console.log(user.rollno)

//Constructor
const obj=new Object();
obj.name='a';
console.log(typeof obj);
console.log(obj);

let a=[1,2,[1,2,3,4],12];
console.log(a[2][2]);
//object inside object
let users={
    user1 :{
        fullname:'a',
        age:{
        user3:{
            subject:'FEE',
        }}
    },
    user2 :{
        fullname:'b',
        age:22,
    }
};
console.log(users.user2.age);
console.log(users.user1.age.user3.subject)

//object inside an array
let array=[
    {
    namee:'a',

},
{
    namee:'b',
subject:'FEE'
},
{
    namee:'c',
subject:'C'
},
]
console.log(array[2].namee);

//merge object: using same keys
obj1={name1:'a',age:20}
obj2={name1:'b',age:25}
obj3={...obj1,...obj2}
console.log(obj3)
//merge object using different keys
obj1={name1:'a',age:20}
obj2={name2:'b',age:25}
obj3={...obj1,...obj2}
console.log(obj3)
obj4=object.assign(obj1,obj2);
console.log(obj4);