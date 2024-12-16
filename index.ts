// let 이름 :string = '정해원';
// let 나이 :number = 30;
// let 출생지역 :string = '부산';

// let 정보 : {곡 : string , 가수 : string } = {곡 : 'hollywood' , 가수 : '검정치마'}
let newinfo : {music : string , singer : string} = {music : 'bindingofissac' , singer : 'isaac'}

let newproject : {
    member : string[],
    days : number,
    started : boolean
} 
= {
    member : ['im',  'jung'],
    days : 50,
    started : false
}

// let project : {
//     member : string[],
//     days : number,
//     started : boolean,
// } = {
//     member : ['kim', 'park'] ,
//     days : 30,
//     started : true
// }

// let uuser : string = 'kim';
// let aager : undefined = undefined;
// let marrried :boolean  = false; 
// let 철철수 : (string | undefined| boolean)[] = [uuser, aager, marrried];

// let school : {
//     score : (number | boolean)[],
//     teacher : string,
//     friend : string | string[]
// } = {
//     score : [100, 97,84],
//     teacher : 'Phjil',
//     friend : 'jjoin'
// }

// school.score[4] = false;
// school.friend = ['Lee', school.teacher]

let 이름 : string | number = 'kim';
let 나이 : (string | number) = 30;

var 어레이 :   (number|string)[] = [1,'2',3];
var 오브젝트 : {data :number|string} = {data : '123'}

let user : string = 'kim';
let age : number | undefined  = undefined;
let married : boolean = false;
let 철수 : (string | number | undefined | boolean)[]  = [user , age , married];

let 학교  : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
}= {
    score : [100, 97 ,84],
    teacher : 'phil',
    friend : 'john'
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]




function cleaning(arr :(number | string)[]){

    let numbers : number[] = [];

    numbers = arr.map(x => typeof x === 'string' ? Number(x) : x);

    return numbers;
}


let A_teacher  = {subject : 'math'}
let B_teacher  = {subject : ['science', 'english']}
let C_teacher  = {subject : ['science', 'art', 'korean']}

function subjects(type : {subject : string } | {subject : string[]}){

  if(Array.isArray(type.subject)){
    return type.subject.at(-1);
  }else{
    return type.subject
  } 

}

console.log(subjects(A_teacher));

type Paint  = { color? : string , size : number , readonly position : number[]}
type Me = {name : string , phone : number , email : string, age : boolean}

let person : Me = {
    name : 'kim',
    phone : 132,
    email : 'im@naver',
    age : true
}

