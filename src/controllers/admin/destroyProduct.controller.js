const { loadData, saveData } = require("../../data");
const fs = require("fs")
const path = require("path")

module.exports = (req, res) => {
    const {id} = req.params;
    const products = loadData();

    const productsLessOne = products.filter(p => p.id !== +id);

    const productToDelete = products.find(p => p.id === +id)
        if (productToDelete){
            const imagePath = path.join(__dirname, `../../../public/imagen/${productToDelete.firstImg}`) 
            fs.unlink(imagePath, () => {})
        }

    saveData(productsLessOne)
    res.redirect("/home")
    
}