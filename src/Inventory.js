const productos = [
    {
        id: '1',
        name: 'Figura Luffy, One Piece',
        price: 30000,
        category: 'figuras',
        img: 'https://cdnx.jumpseller.com/tecnogames-chile/image/33452976/luffy-abystyle.png?1679943799',
        stock: 15,
        details: 'Descripcion figura 1'
    },
    {
        id: '2',
        name: 'PS5',
        price: 700000,
        category: 'consolas',
        img: 'https://i.blogs.es/8fdd98/ps51/450_1000.webp',
        stock: 50,
        details: 'Descripcion consola 1'
    },
    {
        id: '3',
        name: 'Mouse Gamer Logitech',
        price: 60000,
        category: 'accesorios',
        img: 'https://www.viamundo.cl/wp-content/uploads/2021/07/Low_Resolution_JPG-G203-LIGHTSYNC-Gaming-Mouse-FOB-BLACK.jpg',
        stock: 30,
        details: 'Descripcion accesorio 2'
    },
    {
        id: '4',
        name: 'Figura One Punch Man',
        price: 70000,
        category: 'figuras',
        img: 'https://www.gcjuegos.cl/12272-large_default/figura-one-punch-man-figura-dfx-premium-figure-metallic-color-saitama.jpg',
        stock: 50,
        details: 'Descripcion figura 2'
    },
    {
        id: '5',
        name: 'XBOX Series X',
        price: 600000,
        category: 'consolas',
        img: 'https://i.pcmag.com/imagery/reviews/02IVfjGisnI2rBYfxu9hDve-12.fit_lim.size_1200x630.v1605193197.png',
        stock: 70,
        details: 'Descripcion consola 2'
    },
    {
        id: '6',
        name: 'Teclado Gamer Logitech',
        price: 100000,
        category: 'accesorios',
        img: 'https://prophonechile.cl/wp-content/uploads/2019/12/teclado-gamer-mecanico-rgb-logitech-g815-revogames-D_NQ_NP_795817-MLC32822896960_112019-F.jpg',
        stock: 80,
        details: 'Descripcion accesorio 2'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 600)
    })
}

export const getProductosById = (idProductos) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.id === idProductos))
        }, 600)
    })
}

export const getProductosXCategoria = (catProducto) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === catProducto))
        }, 600)
    })
}