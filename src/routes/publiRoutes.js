const express=require("express");

const router=express.Router();

const {getTitle, getApi, getUsuarioInfo, getPassword} = require('../controllers/publicControllers');



router.get('/', getTitle );


router.get('/api', getApi);



router.get('/login', getUsuarioInfo);


router.post('/auth', getPassword);

module.exports=router;