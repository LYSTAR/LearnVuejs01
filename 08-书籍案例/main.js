const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        addBtn(index) {
            this.books[index].count++
        },
        subBtn(index) {
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            // let totalPrice = 0
            // // for (let i in this.books) {
            // //     totalPrice += this.books[i].price * this.books[i].count
            // // }
            // // return totalPrice
            //
            // for (let item of this.books) {
            //     totalPrice += item.price * item.count
            // }
            // return totalPrice
            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count
            }, 0)

        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }
})


//编程范式:命令式编程/声明式编程
//filter/map/reduce
//filter中的回调函数：必须返回一个boolean值 true:返回true时，函数内部会自动将这次回调的n加入到新的数组中 false:返回false时,函数会自动过滤掉n
let nums = [10, 20, 30, 111, 120, 300, 66, 99]

// let newNums = nums.filter(function (n) {
//     return n < 100
// });
//
// //map函数的使用
// let new2Nums = newNums.map(function (n) {
//     return n * 2
// })
//
// //reduce函数的使用
// //对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function (preValue, n) {
//     return preValue + n
// }, 0)

let total = nums.filter(function (n) {
    return n < 100
}).map(function (n) {
    return n * 2
}).reduce(function (preValue, n) {
    return preValue + n
}, 0)

let totals = nums.filter((n) => n < 100).map((n) => n * 2).reduce((pre, n) => pre + n);

console.log(totals);