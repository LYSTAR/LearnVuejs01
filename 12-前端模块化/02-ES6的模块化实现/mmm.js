/*导入模块*/

//1.导入的{}中定义的变量
import {flag,sum,num1,height,mul,Person} from './aaa.js';
//
// if(flag){
//     console.log(sum(22,33))
// }

if(flag){
    console.log('小明是天才，哈哈哈');
    console.log(num1);
    console.log(height);
    console.log(mul(9,9));
}

//2.直接导入export定义的变量
//import {num1,height} from './aaa.js';

console.log(num1);
console.log(height);

//3.导入export的function
//import {mul} from './aaa.js';
console.log(mul(30,50));

const p = new Person();
p.run();

import addr from './aaa.js'
addr('你好啊');

//5.统一全部导入
//import {flag,num,num1,height,Person,mul,sum} from"./aaa";
import * as aaa from './aaa.js'
console.log(aaa.flag);
console.log(aaa.height);

