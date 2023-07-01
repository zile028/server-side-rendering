const {Router} = require("express");
const getAllAccounts = require("../midleweare/getAllAccounts");
const authVerify = require("../midleweare/authVerify")
const router = Router();

router.use(authVerify)
// GET
router.get("/", getAllAccounts, require("../controllers/renderAccountsPage"));
router.get("/add", require("../controllers/renderAccountAddPage"));

router.get("/edit", getAllAccounts, require("../controllers/renderAccountEditPage"));

router.get("/delete", getAllAccounts, require("../controllers/renderAccountDeletePage"));
router.get("/search", require("../controllers/renderSearchResults"))
router.get("/delete/:id", require("../controllers/deleteAccount"));
router.get("/edit/:id", require("../controllers/renderEditFormPage"));

// POST
router.post("/add", require("../controllers/addAccount"));
router.post("/update", require("../controllers/updateAccount"));

module.exports = router;
