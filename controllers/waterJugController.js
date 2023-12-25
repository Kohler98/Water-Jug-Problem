const { response } = require("express");
const { breadthFirstSearch } = require("../helpers/waterJugSolution");

const waterJugResponse = (req,res = response) => {

    const {bucketX,bucketY,amountWantedZ} = req.body
    const jug1 = parseInt(bucketX)
    const jug2 = parseInt(bucketY)
    const response = breadthFirstSearch(jug1,jug2,amountWantedZ)

    res.json({...response})
}

module.exports = waterJugResponse