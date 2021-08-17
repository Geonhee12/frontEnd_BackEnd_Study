import express from 'express'
const router = express.Router()


//router.use(express.json())

router.get('/list', (req, res)=>{
    res.json({r:'ok', data:'this is list'})
})
router.post('/add', (req, res) =>{
    res.json({r:'ok', name:req.body.name})
})

router.post('/update', (req, res) =>{
    res.json({r:'ok', name:req.body.name})
})

export default router