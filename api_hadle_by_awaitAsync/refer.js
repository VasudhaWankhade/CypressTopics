function getJson(url) {
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
}


// let getData = async function(){
//     let id = await getJson('https://reqres.in/api/users?page=2')
//     let getId = id.data[0].id
//     let userinfo = await getJson(`https://reqres.in/api/users/${getId}`)
//     renderHtml(userinfo)
// }
// getData()


// api ===> i

let getdata = async function(c1, c2, c3) {
    let aa = await Promise.all([
        getJson(`https://reqres.in/api/users/${c1}`),
        getJson(`https://reqres.in/api/users/${c2}`),
        getJson(`https://reqres.in/api/users/${c3}`)
    ])
    return aa
}

let aaa = getdata(7, 1, 2)
aaa.then(function(obj) {
    console.log(obj)
})


// let getdataR = async function(c1, c2, c3) {
//     let aa = await Promise.race([
//         getJson(`https://reqres.in/api/users/${c1}`),
//         getJson(`https://reqres.in/api/users/${c2}`),
//         getJson(`https://reqres.in/api/users/${c3}`)
//     ])
//     return aa
// }
// let aaaa = getdataR(7, 1, 2)
// aaaa.then(function(obj) {
//     console.log(obj)
// })


// let getdataSe = async function(c1, c2, c3) {
//     let aa = await Promise.all([
//         Promise.resolve('hello'),
//         //Promise.reject('Bye'),
//         Promise.resolve('Hello')
//         // getJson(`https://reqres.in/api/users/${c1}`),
//         // getJson(`https://reqres.in/api/users/${c2}`),
//         // getJson(`https://reqres.in/api/users/${c3}`)
//     ])
//     return aa
// }
// let aaaaa = getdataSe(7, 1, 2)
// aaaaa.then(function(obj) {
//     console.log(obj)
// })



// let getdataAny = async function(c1, c2, c3) {
//     let aa = await Promise.any([
//         Promise.resolve('hello'),
//         Promise.reject('Bye'),
//         Promise.resolve('Hello')
//         // getJson(`https://reqres.in/api/users/${c1}`),
//         // getJson(`https://reqres.in/api/users/${c2}`),
//         // getJson(`https://reqres.in/api/users/${c3}`)
//     ])
//     return aa
// }
// let aaaaaa = getdataAny(7, 1, 2)
// aaaaaa.then(function(obj) {
//     console.log(obj)
// })


// Promise.race()
// Promise.all()
// Promise.allSettled()
// Promise.any()

// parallel 

// sync -- async function 














// Promise.all() // resolve , Promise.allSettled()  resolve and reject , Promise.race() // whoeveris first











// api ---- data  //
// api ----- pass//


















// function GetData(){
//     return fetch('https://reqres.in/api/users?page=2')
// }
// GetData().then(function(response){
//     return response.json()
// }).then(function(obj){
//     console.log(obj)
// })