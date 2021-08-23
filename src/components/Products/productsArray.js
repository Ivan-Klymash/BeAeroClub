const servicesArray = [
    {
        id: 1,
        name: 'Flight by plane',
        description: 'This is flight by plane',
        quantity: 3,
        time: 30,
        age: 'from 10 years',
        price: 250,
        image: '/images/fly-version-1.jpg',
        category: 'flights',
    },
    {
        id: 2,
        name: 'Climbing',
        description: 'This is climbing',
        quantity: 1,
        time: 10,
        age: 'from 12 years',
        price: 50,
        image: '/images/climbing-version-1.jpg',
        category: 'adrenalin',
    },
    {
        id: 3,
        name: 'Hiking',
        description: 'This is hiking in the mountains',
        quantity: 10,
        time: 240,
        age: 'from 10 years',
        price: 100,
        image: '/images/hiking-version-1.jpg',
        category: 'recreation',
    },
    {
        id: 4,
        name: 'Paragliding',
        description: 'This is paragliding flight',
        quantity: 2,
        time: 20,
        age: 'from 12 years',
        price: 180,
        image: '/images/fly-version-2.jpg',
        category: 'flights',
    },
    {
        id: 5,
        name: 'Riding ATVs',
        description: 'This is Riding ATVs',
        quantity: 2,
        time: 60,
        age: 'from 18 years',
        price: 150,
        image: '/images/ATV-version-2.jpg',
        category: 'adrenalin',
    },
    {
        id: 6,
        name: 'Hiking',
        description: 'This is hiking in the mountains',
        quantity: 10,
        time: 180,
        age: 'from 10 years',
        price: 100,
        image: '/images/hiking-version-2.jpg',
        category: 'recreation',
    },
]

export const getProductsObj = (array) => {
    return array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
}

export default servicesArray
