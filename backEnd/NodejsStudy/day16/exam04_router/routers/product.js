
import express from 'express'
const router = express.Router()

//router.use(express.json())
router.get('/list', (req, res)=>{
    res.json({r:'ok', data:'this is product list'})
})
router.post('/add', (req, res) =>{
    res.json({r:'ok', name:req.body.name})
})
export default router