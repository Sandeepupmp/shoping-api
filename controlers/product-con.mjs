import product from "../model/product.mjs"
const getAllProducts = async (req, res)=>{
    const allProduct = await product.find({})
    res.status(200).json(allProduct)
}

const getAllProductStatic = async (req, res)=>{
    res.status(200).json({msg:"get all product static"})
}

export {
    getAllProducts,
    getAllProductStatic
}