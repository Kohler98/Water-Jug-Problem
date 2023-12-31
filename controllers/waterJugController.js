const { response } = require("express");
const { breadthFirstSearch } = require("../handler/handlerWaterJugSolution");

const waterJugResponse = (req,res = response) => {

    try {
        
        const {bucketX,bucketY,amountWantedZ} = req.body
        const jug1 = parseInt(bucketX)
        const jug2 = parseInt(bucketY)
        const response = breadthFirstSearch(jug1,jug2,amountWantedZ)
    
        res.json({...response})
    } catch (error) {
        res.json({msg:"missing data"})
    }
}

module.exports = waterJugResponse