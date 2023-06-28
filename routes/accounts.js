const { Router } = require("express");

const router = Router();

// GET
router.get("/", require("../controllers/renderAccountsPage"));
router.get("/add", require("../controllers/renderAccountAddPage"));
router.get("/edit", require("../controllers/renderAccountEditPage"));
router.get("/delete", require("../controllers/renderAccountDeletePage"));
router.get("/delete/:id", require("../controllers/deleteAccount"));
router.get("/edit/:id", require("../controllers/renderEditFormPage"));

// POST
router.post("/add", require("../controllers/addAccount"));
router.post("/update", require("../controllers/updateAccount"));

module.exports = router;
