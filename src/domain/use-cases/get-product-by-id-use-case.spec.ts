import Product from "../entities/product"
import UniqueEntityId from "../entities/value-objects/unique-entity-id"
import InMemoryProductRepository from "../repositories/in-memory-repositories/in-memory-product-repository"
import ProductRepository from "../repositories/products-repository"
import GetProductByIdUseCase from "./get-product-by-id-use-case"

let productRepository:ProductRepository
let sut:GetProductByIdUseCase

beforeAll(() => {
    productRepository = new InMemoryProductRepository()
    
    sut = new GetProductByIdUseCase(
        productRepository
    )

    vi.useFakeTimers()
})

afterAll(() => {
    vi.useRealTimers()
})


describe('Get Product By Id Use Case', () => {
    
    it('should be able to get a product by id', async () => {  
        
        const { product:prodCreated } = await productRepository.create(Product.create({ 
            autoPurchaseAmount:30,
            buyPrice:50,
            color:'red',
            description:'oi',
            inventory: { amount: 5 },
            sellPrice:80,
            size:'70x50',
            title:'teste'
        }))
        
        const { product } = await sut.execute({ productId:prodCreated.id.value })

        expect(product).toBeInstanceOf(Product)
        expect(product).toEqual(expect.objectContaining({
            id:expect.any(UniqueEntityId),
            title:'teste'
        }))
    })

})