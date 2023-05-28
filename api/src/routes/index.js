const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const {postFav} = require('../controllers/postFav.js');
const {getFavs} = require('../controllers/getFavs.js');
const {deleteFav} = require('../controllers/deleteFav.js');
const {postUser} = require('../controllers/postUser.js');
const login = require('../controllers/login');

const router = Router();

//ruta http://localhost:3001/rickandmorty/login

router.get("/character/:id", getCharById);
router.get("/getFavs", getFavs);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

router.get('/login', login);
router.post('/login', postUser);


module.exports = router;
