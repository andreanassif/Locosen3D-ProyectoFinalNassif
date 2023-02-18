const ApiProducts = {
    get: ()=>{
        return fetch('/api/products')
            .then(data=>data.json())
    }
}

const ApiCarts = {
    createCart: ()=>{
        const options = { method: "POST"}
        return fetch('/api/carts', options)
            .then(data=>data.json())
    },
    getIDs: ()=>{
        return fetch('/api/carts', options)
            .then(data=>data.json())
    },
    postProd: (cartID, prodID) => {
        const data = { id: prodID }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        return fetch(`/api/carts/${cartID}/products`, options)
    },
    getProds: cartID => {
        return fetch(`/api/carts/${cartID}/products`)
            .then(data => data.json())
    },
    deleteProd: (cartID, prodID) => {
        const options = {
            method: 'DELETE',
        }
        return fetch(`/api/carts/${cartID}/products/${prodID}`, options)
    }
}

loadMixProducts()

loadMixCart()

document.getElementById('btnAddCart').addEventListener('click',()=>{
    const cartID = document.getElementById('MixCart').value 
    const prodID = document.getElementById('MixProducts').value
    if(cartID && prodID){
        addCart(cartID, prodID)
    } else {
        alert('debe seleccionar un carrito y un producto')
    }
})

document.getElementById('btnCreateCart').addEventListener('click', ()=>{
    ApiCarts.createCart()
        .then(({ id }) =>{
            loadMixCart().then(()=>{
                const mix = document.getElementById('MixCart')
                mix.value = `${id}`
                mix.dispatchEvent(new Event('change'));
            })
        }) 
})

document.getElementById('MixCart').addEventListener('change', ()=>{
    const cartID = document.getElementById('MixCart').value
    updateCartList(cartID)
})

function addCart(cartID, prodID){
    return ApiCarts.postProd(cartID, prodID).then(()=>{
        updateCartList(cartID)
    })
}

function deleteCart(prodID){
    const cartID = document.getElementById('MixCart').value
    return ApiCarts.deleteProd(cartID, prodID).then(()=>{
        updateCartList(cartID)
    })
}

function updateCartList(cartID){
    return ApiCarts.getProds(cartID)
        .then(prods => makeHtmlTable(prods))
        .then(html =>{
            document.getElementById('Cart').innerHTML = html
        })
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
                    <td>${prod.title}</td>
                    <td>$${prod.price}</td>
                    <td><img width="50" src=${prod.thumbnail} alt="not found"></td>
                    <td><a type="button" onclick="deleteCart('${prod.id}')">borrar</a></td>
                    </tr>`
        }
        html += `
            </table>
        </div >`
    } else {
        html += `<br><h4>carrito sin productos</h2>`
    }
    return Promise.resolve(html)
}

function crearOpcionInicial(leyenda) {
    const defaultItem = document.createElement("option")
    defaultItem.value = ''
    defaultItem.text = leyenda
    defaultItem.hidden = true
    defaultItem.disabled = true
    defaultItem.selected = true
    return defaultItem
}

function loadMixProducts() {
    return ApiProducts.get()
        .then(products => {
            const mix = document.getElementById('MixProducts');
            mix.appendChild(crearOpcionInicial('elija un producto'))
            for (const prod of products) {
                const mixItem = document.createElement("option");
                mixItem.value = prod.id;
                mixItem.text = prod.title;
                mix.appendChild(mixItem);
            }
        })
}

function vaciarMix(mix) {
    while (mix.childElementCount > 0) {
        mix.remove(0)
    }
}

function loadMixCart() {
    return ApiCarts.getIDs()
        .then(IDs => {
            const mix = document.getElementById('MixCart');
            vaciarMix(mix)
            mix.appendChild(crearOpcionInicial('elija un carrito'))
            for (const id of IDs) {
                const mixItem = document.createElement("option");
                mixItem.value = id;
                mixItem.text = id;
                mix.appendChild(mixItem);
            }
        })
}