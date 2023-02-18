const ApiProducts = {
    get: ()=> {
        return fetch('api/products').then(data=>data.json())
    },
    post: (newProd)=>{
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProd)
        }
        return fetch('api/products', options)
    },
    put: (prodID, newProd)=>{
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProd)
        }
        return fetch(`/api/products/${prodID}`, options)
    },
    delete: (prodID) => {
        const options = {
            method: 'DELETE'
        }
        return fetch(`/api/products/${prodID}`, options)
    },
}

//------------------------------------------PRODUCTS------------------------------------------//

updateProdList()

const formAddProd = document.getElementById('formAddProd')
formAddProd.addEventListener('submit', e => {
    e.preventDefault()
    const product = readFormProd()
    ApiProducts.post(product)
        .then(updateProdList)
        .then(()=>{
            formAddProd.reset()
        })
        .catch((err)=>{
            alert(err.message)
        })
})

function readFormProd(){
    const product = {
        title: formAddProd[0].value,
        price: formAddProd[1].value,
        thumbnail: formAddProd[2].value,
        stock: formAddProd[3].value
    }
    return product
}

function updateProdList(){
    return ApiProducts.get()
    .then(prods => makeHtmlTable(prods))
    .then(html =>{
        document.getElementById('products').innerHTML = html
    })

}

function deleteProduct(prodID){
    ApiProducts.delete(prodID)
        .then(updateProdList)
}

function updateProd(prodID) {
    const newProd = readFormProd()
    ApiProducts.put(prodID, newProd)
        .then(updateProdList)
}

function fillForm(title='', price='',thumbnail='', stock=''){
    formAddProd[0].value = title
    formAddProd[1].value = price
    formAddProd[2].value = thumbnail
    formAddProd[3].value = stock
}

function makeHtmlTable(products) {
    let html = `
        <style>
            .table td,
            .table th {
                vertical-align: middle;
            }
        </style>`

    if (products.length > 0) {
        html += `
        <h2>Lista de Productos</h2>
        <div class="table-responsive">
            <table class="table table-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Foto</th>
                </tr>`
        for (const prod of products) {
            html += `
                    <tr>
                    <td><a type="button" onclick="fillForm('${prod.title}', '${prod.price}','${prod.thumbnail}')" title="copiar a formulario...">${prod.title}</a></td>
                    <td>$${prod.price}</td>
                    <td><img width="50" src=${prod.thumbnail} alt="not found"></td>
                    <td><a type="button" onclick="deleteProduct('${prod.id}')">borrar</a></td>
                    <td><a type="button" onclick="updateProd('${prod.id}')">actualizar</a></td>
                    </tr>`
        }
        html += `
            </table>
        </div >`
    }
    return Promise.resolve(html)
}