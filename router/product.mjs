import { Router } from "express";
import { getAllProductStatic, getAllProducts } from "../controlers/product-con.mjs";

const router = Router()

router.get('/', getAllProducts)
router.get('/static', getAllProductStatic)

export default router