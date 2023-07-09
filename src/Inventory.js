const productos = [
    {
        id: '1',
        name: 'Figura Luffy, One Piece',
        price: 30000,
        category: 'figura',
        img: 'https://cdnx.jumpseller.com/tecnogames-chile/image/33452976/luffy-abystyle.png?1679943799',
        stock: 15,
        details: 'Descripcion figura 1'
    },
    {
        id: '2',
        name: 'PS5',
        price: 700000,
        category: 'consola',
        img: 'https://i.blogs.es/8fdd98/ps51/450_1000.webp',
        stock: 50,
        details: 'Descripcion consola 1'
    },
    {
        id: '3',
        name: 'Mouse Gamer Logitech',
        price: 60000,
        category: 'Accesorios',
        img: 'https://www.viamundo.cl/wp-content/uploads/2021/07/Low_Resolution_JPG-G203-LIGHTSYNC-Gaming-Mouse-FOB-BLACK.jpg',
        stock: 30,
        details: 'Descripcion figura 1'
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 600)
    })
}