
//Task 1
/*let person={};
person.uname='sanjay';
person.surname='veer';
console.log(person.uname+' '+person.surname);
delete person.surname;
*/

//Task2
/*let salaries=
{
 John:1500,
 Pete:2000,
 Vignesh:4500,
 Amy:5000   
}


let sum=0;
for(let sal in salaries)
{
    sum+=salaries[sal];
}
console.log(sum);

*/


//Task 3


/*let pageInfo=
{
    width:500,
    height:800,
    title:'mypage'
}
let totalsum=0;
for(let data in pageInfo)
{
if(typeof pageInfo[data] == "number")
{
    pageInfo[data]*=2;
}
}
console.log('total data',totalsum);
console.log(pageInfo);
*/

//Task 4

/*let info=
{
    uname:'sam',
    company:'Dlithe',
    gender:'male'
};
let resultinfo=info;
info.uname="sanjay";
console.log(resultinfo);*/

let calculator=
{
    num1:+prompt('enter fisrt num'),
    num2:+prompt('enter second num'),
    add:function()
    {
        let result=this.num1+this.num2;
       console.log(result);
    },
    multiply:function()
    {
        let result=this.num1*this.num2;
        console.log(result)
    }
}
calculator.add();
calculator.multiply();



