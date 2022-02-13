const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Order } = require("../models");
const passport = require("passport");

router.get("/", async (req, res, next) => {
  try {
    const OrderList = await Order.findAll({
      order: [["createdAt", "DESC"]],
      attributes: {
        exclude: ["updatedAt", "createdAt"],
      },
    });
    return res.status(200).json(OrderList);
  } catch (error) {
    console.error(error);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    await Order.create({
      date: req.body.date,
      classification: req.body.classification,
      detail: req.body.detail,
      deliveryPrice: req.body.deliveryPrice,
      pickUpPosLa: req.body.pickUpPosLa,
      pickUpPosMa: req.body.pickUpPosMa,
      additionalRequest: req.body.additionalRequest,
      pickUpTime: req.body.pickUpTime,
      UserId: req.user.id,
    });
    res.status(200).send("ok");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
