const Order = require("../models/Order");
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();

//Update
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body)
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err)
  }
})

//Del
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//update
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {

  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true })
    //update
    res.status(200).json(updatedOrder);
    //err
  } catch (err) { res.status(500), json(err) };

});

//get order
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;