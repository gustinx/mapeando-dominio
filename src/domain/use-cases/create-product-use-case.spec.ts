import Product from "../entities/product"
import UniqueEntityId from "../entities/value-objects/unique-entity-id"
import InMemoryProductRepository from "../repositories/in-memory-repositories/in-memory-product-repository"
import ProductRepository from "../repositories/products-repository"
import CreateProductUseCase from "./create-product-use-case"

let productRepository:ProductRepository

let sut:CreateProductUseCase

beforeAll(() => {
    productRepository = new InMemoryProductRepository()

    
    sut = new CreateProductUseCase(
        productRepository
    )

    vi.useFakeTimers()
})

afterAll(() => {
    vi.useRealTimers()
})


describe('Create Product Use Case', () => {
    
    it('should be able to create a product', async () => {            
        const { product } = await sut.execute({ 
            autoPurchaseAmount:30,
            buyPrice:50,
            color:'red',
            description:'oi',
            inventory: { amount: 5 },
            sellPrice:80,
            size:'70x50',
            title:'teste'
        })

        expect(product).toBeInstanceOf(Product)
        expect(product).toEqual(expect.objectContaining({
            id:expect.any(UniqueEntityId),
            title:'teste'
        }))
    })

})