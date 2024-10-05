
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

const button = document.querySelector("button")
const table = document.querySelector("table")

const fetchuser = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    // console.log(data)
    data.products.forEach((product) => { 
        let tr = document.createElement("tr")
        let th = document.createElement("td")
        let th2 = document.createElement("td")
        let th3 = document.createElement("td")
        let th4 = document.createElement("td")
        th.innerText = product.id
        th2.innerText = product.title
        th3.innerText = product.description
        th4.innerText = product.price
        tr.appendChild(th);
        tr.appendChild(th2)
        tr.appendChild(th3)
        tr.appendChild(th4)
        table.appendChild(tr);
    });
}

button.addEventListener("click", fetchuser)
