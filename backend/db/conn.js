const mongoose = require("mongoose");

async function main() {
    try {
        //mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://andreavancini:eCRLH5McYPmrVniT@cluster0.v6l5gpj.mongodb.net/?retryWrites=true&w=majority"
        );
        
        console.log(" ======== Conectado ao BD ======== ")
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;