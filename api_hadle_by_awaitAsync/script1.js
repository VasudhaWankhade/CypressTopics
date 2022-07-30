// hit api to get user list
// from that get id of one user and pass it second api and hit it

// function multiplication(a, b) {
//     console.log(a * b)
// }

// function division(a, b) {
//     console.log(a / b)
// }


// division(10, 5)
// multiplication(10, 5)
//     //Above both function are sync in nature ==> the functions will be executed in the order of calling

// function add() {
//     setTimeout(function() {
//         console.log("Hello")
//     }, 3000)
// }

// function greet() {
//     console.log("Welcome")
// }

// add()
// greet()

//setTimeout function will break the sync nature of code

// use of call back hell

// 
// convert_To_Json('https://reqres.in/api/users?page=2').then(function(urlResponse) {
//     console.log(urlResponse)
// })

function renderHtml(feed) {
    let htmlElement = `<div>
<p>${feed.id}</p>
<p>${feed.first_name}</p>
<p>${feed.last_name}</p>
<p>${feed.email}</p>
<img src=${feed.avatar}>
</div>`
    box.insertAdjacentHTML('beforeend', htmlElement)
}

// function get_Info_of_firstUser(pageNo) {
//     let apiRequest = new XMLHttpRequest()
//     apiRequest.open('GET', `https://reqres.in/api/users?page=${pageNo}`)
//     apiRequest.send()
//     apiRequest.addEventListener('load', function() {
//         let received_data = JSON.parse(this.responseText)
//             // console.log(received_data)
//         let first_User_Id = received_data.data[0].id

//         let apiRequest = new XMLHttpRequest()
//         apiRequest.open('GET', `https://reqres.in/api/users/${first_User_Id}`)
//         apiRequest.send()

//         apiRequest.addEventListener('load', function() {
//             let received_Id = JSON.parse(this.responseText)
//                 // console.log(received_Id)
//             let aa = received_Id.data
//             renderHtml(aa)
//         })

//     })
// }

// get_Info_of_firstUser(2)

// Better than call back hell are promises

function convert_To_Json(url) {
    return fetch(url).then(function(data) {
        return data.json()
    })
}

// convert_To_Json('https://reqres.in/api/users?page=2')
//     .then(function(data) {
//         return data
//     })
//     .then(function(obj) {
//         return obj.data[0].id
//     })
//     .then(function(id) {
//         return convert_To_Json(`https://reqres.in/api/users/${id}`)
//     })
//     .then(function(info) {
//         return info.data
//     })
//     .then(function(user) {
//         return renderHtml(user)
//     })


// Better than promises are async and await

// let asyncFun = async function(pageNo) {
//     let api = await convert_To_Json(`https://reqres.in/api/users?page=${pageNo}`)
//         // console.log(api)
//     let id = api.data[0].id
//         // console.log(id)
//     let api_for_userInfo = await convert_To_Json(`https://reqres.in/api/users/${id}`)
//         // console.log(api_for_userInfo)
//     let userData = api_for_userInfo.data
//     renderHtml(userData)
// }

// asyncFun(1)

// there are some methods of promises to run all independent api's parallely

// Promise.all() ==> for all resolved promises if any promise is rejected it gives error

let all = async function() {
        let allPromise = await Promise.all([
            Promise.resolve("Resolved"),
            // Promise.reject("Rejected")
        ])
        return allPromise
    }
    // all().then(function(data) {
    // console.log(data)
    // })

// Promise.any()  ==> avoid rejected promises and reuturn only first executed resolve promise

let any = async function() {
    let anyPromise = await Promise.any([
        Promise.reject("Rejected"),
        Promise.resolve("Resolved1"),
        Promise.resolve("Resolved2")
    ])
    return anyPromise
}

// any().then(function(data) {
//     console.log(data)
// })

// Promise.allSettled()  ==> resolve and reject both

let settled = async function() {
    let settledPromise = await Promise.allSettled([
        Promise.resolve("Resolved"),
        Promise.reject("Rejected")
    ])
    return settledPromise
}

// settled().then(function(data) {
//     console.log(data)
// })

// Promise.race() ==> the one which is executed first will be displayed first
// gives error for rejected promise if it is executed first

let race = async function() {
    let racePromise = await Promise.race([
        Promise.resolve("Resolved"),
        Promise.reject("Rejected"),
        Promise.resolve("Resolved")
    ])
    return racePromise
}

// race().then(function(data) {
//     console.log(data)
// })


// Note

let promise_New = new Promise(function(resolve, reject) {
    let x = 10
    let y = 30
    if (x == y) {
        resolve("Right")
    } else {
        reject("Wrong")
    }
})

promise_New
    .then(function(data) {
        console.log(data)
    })
    .catch(function(catchData) {
        console.log(catchData)
    })
    .finally(function() {
        console.log("Whatever")
    })