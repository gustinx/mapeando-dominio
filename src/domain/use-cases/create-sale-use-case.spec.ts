import Product from "../entities/product"
import Sale from "../entities/sale"
import InMemoryProductRepository from "../repositories/in-memory-repositories/in-memory-product-repository"
import InMemorySalesRepository from "../repositories/in-memory-repositories/in-memory-sales-repository"
import ProductRepository from "../repositories/products-repository"
import SalesRepository from "../repositories/sales-repository"
import CreateSaleUseCase from "./create-sale-use-case"

let productRepository:ProductRepository
let salesRepository: SalesRepository
let sut:CreateSaleUseCase

beforeAll(() => {
    productRepository = new InMemoryProductRepository()
    salesRepository = new InMemorySalesRepository()
    
    sut = new CreateSaleUseCase(
        salesRepository
    )

    vi.useFakeTimers()
})

afterAll(() => {
    vi.useRealTimers()
})


describe('Create Sale Use Case', () => {
    
    it('should be able create a sale', async () => {       
        
        const { product } = await productRepository.create(Product.create({
            autoPurchaseAmount:30,
            buyPrice:50,
            color:'red',
            description:'oi',
            inventory: { amount: 20, minAmount:3 },
            sellPrice:80,
            size:'70x50',
            title:'teste'
        }))

        console.log('product.color', product.color)

        const sutResp = await sut.execute({ 
            clientId:'123',
            salespersonId:'123',
            status:'ORDER PROCESSING',
            items:{
                '13':{
                    amount:2,
                    product: Product.create({ 
                        autoPurchaseAmount:30,
                        buyPrice:50,
                        color:'red',
                        description:'oi',
                        inventory: { amount: 5 },
                        sellPrice:80,
                        size:'70x50',
                        title:'teste'
                     }, '13')
                },
                '14':{
                    amount:2,
                    product: Product.create({ 
                        autoPurchaseAmount:30,
                        buyPrice:50,
                        color:'red',
                        description:'oi',
                        inventory: { amount: 5 },
                        sellPrice:80,
                        size:'70x50',
                        title:'teste'
                     }, '14')
                },
            }
        })

        expect(sutResp.sale).toBeInstanceOf(Sale)
        expect(sutResp.sale.profit).toEqual(60)
    })    

})