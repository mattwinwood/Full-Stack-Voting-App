import express from "express";
import data from "../src/testData.json";
// Create Router
const ApiRouter = express.Router();

// Create API Endpoints
ApiRouter.get("/contests", (req, res) => {
    res.send({contests : data.contests});
});

// Export
export default ApiRouter;