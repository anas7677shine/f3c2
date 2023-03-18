console.log("fetching data from table");

function showData() {
    
    setTimeout(() => {
        var currentdate = new Date();
        document.getElementById('t1').innerHTML = currentdate.getHours()+" : " +currentdate.getMinutes() +" : "+ currentdate.getSeconds()
        fetch("https://dummyjson.com/posts")
        .then((Response) => Response.json())
        .then(compaltedata => promiseAPI1(compaltedata))
    }, 1000);

    setTimeout(() => {
        var currentdate = new Date();
        document.getElementById('t2').innerHTML = currentdate.getHours()+" : " +currentdate.getMinutes() +" : "+ currentdate.getSeconds()

         fetch("https://dummyjson.com/products")
        .then((Response) => Response.json())
        .then(compaltedata => promiseAPI2(compaltedata))
    }, 2000);
    setTimeout(() => {
        // document.getElementById('t3').innerHTML = currentdate.getHours()+" : " +currentdate.getMinutes() +" : "+ currentdate.getSeconds()

         fetch("https://dummyjson.com/todos")
        .then((Response) => Response.json())
        .then(compaltedata => promiseAPI3(compaltedata))
    }, 3000);
}

function promiseAPI1(data) {
    let p1 = data.posts;

    let pt1 = ""
    for (let i = 0; i < p1.length; i++) {
        // console.log(p1[i].value);
        pt1 += `
        <tr>
            <td scope="row">${p1[i].id}</th>
            <td>${p1[i].title}</td>
            <td>${p1[i].body}</td>
            <td>${p1[i].tags}</td>
            <td>${p1[i].reactions}</td>
        </tr>
        `

        document.getElementById('body1').innerHTML = pt1;
    }


}
function promiseAPI2(data) {
    let p2 = data.products

    // console.log(p);

    let pt2 = ""
    for (let i = 0; i < p2.length; i++) {
        // console.log(p[i]);
        pt2 += `
        <tr>
            <td scope="row">${p2[i].id}</th>
            <td>${p2[i].title}</td>
            <td>${p2[i].description}</td>
            <td>${p2[i].price}</td>
            <td>${p2[i].discountPercentage}</td>
            <td>${p2[i].stock}</td>
            <td>${p2[i].brand}</td>
            <td>${p2[i].category}</td>
            <td><img src ="${p2[i].thumbnail}"  width="200" height="150"></td>
            
            <td>
                <img src ="${p2[i].images[2]}"  width="200" height="150">

            </td>
            
        </tr>
        `

        document.getElementById('body2').innerHTML = pt2;

    }


}




function promiseAPI3(data) {
    let p3 = data.todos

    // console.log(p);

    let pt3 = ""
    for (let i = 0; i < p3.length; i++) {
        pt3 += `
        <tr>
            <td scope="row">${p3[i].id}</th>
            <td scope="row">${p3[i].completed}</th>
            <td>${p3[i].todo}</td>
            <td>${p3[i].userId}</td>
        </tr>
        `

        document.getElementById('body3').innerHTML = pt3;
    }


}