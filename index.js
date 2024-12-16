// let 이름 :string = '정해원';
// let 나이 :number = 30;
// let 출생지역 :string = '부산';
// let 정보 : {곡 : string , 가수 : string } = {곡 : 'hollywood' , 가수 : '검정치마'}
var newinfo = { music: 'bindingofissac', singer: 'isaac' };
var newproject = {
    member: ['im', 'jung'],
    days: 50,
    started: false
};
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
var 이름 = 'kim';
var 나이 = 30;
var 어레이 = [1, '2', 3];
var 오브젝트 = { data: '123' };
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'phil',
    friend: 'john'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function cleaning(arr) {
    var numbers = [];
    numbers = arr.map(function (x) { return typeof x === 'string' ? Number(x) : x; });
    return numbers;
}
var A_teacher = { subject: 'math' };
var B_teacher = { subject: ['science', 'english'] };
var C_teacher = { subject: ['science', 'art', 'korean'] };
function subjects(type) {
    if (Array.isArray(type.subject)) {
        return type.subject.at(-1);
    }
    else {
        return type.subject;
    }
}
console.log(subjects(A_teacher));
var person = {
    name: 'kim',
};
