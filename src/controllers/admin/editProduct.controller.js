const { loadData } = require("../../data")
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req, res) =>{
    const products = loadData()
    const { id } = req.params
    const productFind = products.find(p => p.id === +id)
    res.render("./admin/editProduct", { product: productFind})
}