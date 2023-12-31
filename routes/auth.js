const {Router} = require("express")

const router = Router()

router.post("/register", require("../controllers/register"))
router.post("/login", require("../controllers/login"))
router.get("/logout", require("../controllers/logout"))

module.exports = router