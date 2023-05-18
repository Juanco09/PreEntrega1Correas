import MOCK_DATA from '../data/MOCK_DATA.json'


export const pedirProductoPorId = (id) => {
    return new Promise( (resolve, reject) => {
    
        setTimeout(() => {
            resolve(MOCK_DATA.find(prod => prod.id === id))
        }, 1000)

    })
}