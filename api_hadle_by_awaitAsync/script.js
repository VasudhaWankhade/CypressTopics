//  Instead of using cy.wait or call back hell or promises we can use async function and await keyword

function getJson(url) {
    return fetch(url).then(function(data) { // fetch always return a promise
        return data.json()
    })
}

// let readableData = getJson('https://reqres.in/api/users?page=2')
// console.log(readableData)

// function renderHtml(userInfo) {
//     let html = `<div>
//     <img src=${userInfo.avatar}></img>
//     <p>${userInfo.email}</p>
//     <p>${userInfo.first_name}</p>
//     <p>${userInfo.id}</p>
//     <p>${userInfo.last_name}</p> 
//     </div>
//     `
//     box.insertAdjacentHTML('beforeend', html)
// }

//async is the keyword to make a function async

// let getUserData = async function() {
//         let userList = await getJson('https://reqres.in/api/users?page=2')
//         console.log(userList)
//         let id = userList.data[2].id
//         let idInfo = await getJson(`https://reqres.in/api/users/${id}`)
//         console.log(idInfo)
//         renderHtml(idInfo.data)
//     }
// getUserData()

// let getAll = async function(id1, id2, id3) {

//     let pro = await Promise.all([
//         getJson(`https://reqres.in/api/users/${id1}`),
//         getJson(`https://reqres.in/api/users/${id2}`),
//         getJson(`https://reqres.in/api/users/${id3}`)
//     ])
//     return pro

// }

// let read = getAll(1, 3, 2)
// read.then(function(data) {
//         console.log(data)
// })


//Promise.all() ==> to execute independent api respponse parallely

// let getAll = async function(id1, id2, id3) {

//     let pro = await Promise.all([
//         Promise.resolve("Solved"),
//         Promise.reject("Unsolevd"),
//         Promise.resolve("Solved")
//     ])
//     return pro

// }
// console.log(getAll(1, 2, 3))
//Promise.all() run for only resolved promises, it give uncaught error if any of the promises is rejected

// Promise.race() ==> the promise which give response first

// let getAll = async function(id1, id2, id3) {

//     let pro = await Promise.race([
//         Promise.resolve("Solved"),
//         Promise.reject("Unsolevd"),
//         Promise.resolve("Solved")
//     ])
//     return pro

// }
// console.log(getAll(1, 2, 3))

//Promise.allSetteled() ==> all promises are executed both resolved and rejected

// let getAll = async function(id1, id2, id3) {

//     let pro = await Promise.allSettled([
//         Promise.resolve("Solved"),
//         Promise.reject("Unsolevd"),
//         Promise.resolve("Solved")
//     ])
//     return pro

// }
// console.log(getAll(1, 2, 3))

//Promise.any()

// let getAll = async function(id1, id2, id3) {

//     let pro = await Promise.all([
//         Promise.resolve("Solved"),
//         Promise.reject("Unsolevd"),
//         Promise.resolve("Solved")
//     ])
//     return pro

// }
// console.log(getAll(1, 2, 3))