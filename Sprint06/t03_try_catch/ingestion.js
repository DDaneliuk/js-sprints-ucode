module.exports.Ingestion = class {
    id;
    products = [];
    constructor(meal_type, day_of_diet){
        this.meal_type = meal_type;
        this.day_of_diet = day_of_diet;
    }
    setProduct(product){
        this.products.push(product)
    }
    getProductInfo(productName){
        let result
        this.products.forEach((p) => {
            if(p.name == productName){
                result = p
            }
        })
        return result
    }
    getFromFridge(productName){
        let product = this.getProductInfo(productName)
        if (product.kcal > 200){
            throw new Error(
                `Too many calories in ${productName} for ${this.meal_type}`
            
            )
        }
    }
}