const { response } = require("express");
const { breadthFirstSearch } = require("../helpers/waterJugSolution");

const waterJugResponse = (req,res = response) => {

<<<<<<< HEAD
    try {
        
        const {bucketX,bucketY,amountWantedZ} = req.body
        const jug1 = parseInt(bucketX)
        const jug2 = parseInt(bucketY)
        const response = breadthFirstSearch(jug1,jug2,amountWantedZ)
    
        res.json({...response})
    } catch (error) {
        res.json({msg:"missing data"})
    }
=======
    const {bucketX,bucketY,amountWantedZ} = req.body
    const jug1 = parseInt(bucketX)
    const jug2 = parseInt(bucketY)
    const resp = breadthFirstSearch(jug1,jug2,amountWantedZ)

    res.json({...resp})
>>>>>>> 25a8b70d21921562db685c4b56cdfb5efddfb73f
}

module.exports = waterJugResponse