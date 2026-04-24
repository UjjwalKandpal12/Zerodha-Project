const config = require("./config/config");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const authRouter = require("./routes/auth.routes");
const app = express();
const PORT = config.PORT || 5000;

const allowedOrigins = ["http://localhost:3000", "http://localhost:3001", "https://zerodha-project-frontend2.onrender.com","https://zerodha-project-dashboard-rlde.onrender.com"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
app.use(morgan("combined"));
app.use(cookieParser());

const HoldingsModel = require("./models/HoldingsModel");
const PositionModel = require("./models/PositionModel");
const OrderModel = require("./models/OrderModel");

app.use(bodyParser.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];
//   tempHoldings.forEach((item) => {
//     const newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//     res.send("Holdings added successfully");
// });

mongoose
  .connect(config.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/addPositions", async (req, res) => {
  const positions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
    {
      product: "MIS",
      name: "TATASTEEL",
      qty: 5,
      avg: 127.45,
      price: 131.2,
      net: "+2.94%",
      day: "+1.10%",
      isLoss: false,
    },
    {
      product: "CNC",
      name: "RELIANCE",
      qty: 3,
      avg: 2845.0,
      price: 2910.5,
      net: "+5.20%",
      day: "+0.87%",
      isLoss: false,
    },
    {
      product: "MIS",
      name: "INFY",
      qty: 4,
      avg: 1450.6,
      price: 1423.3,
      net: "-1.88%",
      day: "-0.95%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "HDFCBANK",
      qty: 2,
      avg: 1612.0,
      price: 1645.75,
      net: "+2.09%",
      day: "+0.45%",
      isLoss: false,
    },
    {
      product: "NRML",
      name: "WIPRO",
      qty: 10,
      avg: 415.3,
      price: 408.9,
      net: "-1.54%",
      day: "-0.72%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "SBIN",
      qty: 6,
      avg: 578.25,
      price: 591.4,
      net: "+2.27%",
      day: "+1.05%",
      isLoss: false,
    },
    {
      product: "MIS",
      name: "ONGC",
      qty: 8,
      avg: 189.7,
      price: 185.3,
      net: "-2.32%",
      day: "-1.50%",
      isLoss: true,
    },
    {
      product: "NRML",
      name: "ITC",
      qty: 15,
      avg: 432.55,
      price: 441.2,
      net: "+2.00%",
      day: "+0.60%",
      isLoss: false,
    },
    {
      product: "CNC",
      name: "BAJFINANCE",
      qty: 1,
      avg: 6842.0,
      price: 6730.45,
      net: "-1.63%",
      day: "-2.10%",
      isLoss: true,
    },
    {
      product: "MIS",
      name: "AXISBANK",
      qty: 7,
      avg: 1023.5,
      price: 1051.8,
      net: "+2.76%",
      day: "+1.30%",
      isLoss: false,
    },
    {
      product: "NRML",
      name: "MARUTI",
      qty: 1,
      avg: 10450.0,
      price: 10612.35,
      net: "+1.55%",
      day: "+0.92%",
      isLoss: false,
    },
    {
      product: "CNC",
      name: "SUNPHARMA",
      qty: 3,
      avg: 1178.4,
      price: 1154.25,
      net: "-2.05%",
      day: "-1.18%",
      isLoss: true,
    },
    {
      product: "MIS",
      name: "POWERGRID",
      qty: 20,
      avg: 248.9,
      price: 253.6,
      net: "+1.89%",
      day: "+0.75%",
      isLoss: false,
    },
  ];
  const newPositions = await PositionModel.insertMany(positions);
  res.json({ message: "Positions added successfully" });

  //   positions.forEach(async(item)=>{
  //     const newPositions = PositionModel.insertMany({
  //       product: item.product,
  //       name: item.name,
  //       qty: item.qty,
  //       avg: item.avg,
  //       price: item.price,
  //       net: item.net,
  //       day: item.day,
  //       isLoss: item.isLoss,

  //   })
  // })
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  const newOrder = new OrderModel({
    name,
    qty,
    price,
    mode,
  });
  await newOrder.save();
  res.json({ message: "Order placed successfully" });
});

app.post("/updateHoldings", async (req, res) => {
  const { name, qty, price } = req.body;

  let avgValue = price - Math.floor(Math.random() * 100);
  let net = Math.round(((price - avgValue) / avgValue) * 100 * 100) / 100 + "%";
  let isLoss = price < avgValue;
  let day = Math.round(Math.random() * 3 * 100) / 100 + "%";
  const updateHolding = new HoldingsModel({
    name,
    qty,
    price,
    avg: avgValue,
    net: net.toString(),
    day: day.toString(),
    isLoss,
  });
  await updateHolding.save();
  res.json({ message: "Holdings updated successfully" });
});

//delete holdings after selling
app.post("/sellHoldings", async (req, res) => {
  const { name, qty, price } = req.body;
  const existingHolding = await HoldingsModel.findOne({ name: name });

  if (!existingHolding) {
    return res.status(404).json({ message: "Holding not found" });
  } else if (qty > existingHolding.qty) {
    return res.status(400).json({ message: "Not enough quantity to sell" });
  } else {
    existingHolding.price = price;
    existingHolding.qty -= qty;
    if (existingHolding.qty === 0) {
      await HoldingsModel.deleteOne({ name: name });
    } else {
      let avgValue = price - Math.floor(Math.random() * 100);
      let net =
        Math.round(((price - avgValue) / avgValue) * 100 * 100) / 100 + "%";
      let isLoss = price < avgValue;
      let day = Math.round(Math.random() * 3 * 100) / 100 + "%";
      existingHolding.avg = avgValue;
      existingHolding.net = net.toString();
      existingHolding.day = day.toString();
      existingHolding.isLoss = isLoss;
      await existingHolding.save();
    }
    return res.json({ message: "Holdings updated successfully" });
  }
});

app.get("/holdings/:name", async (req, res) => {
  const { name } = req.params;
  let holding = await HoldingsModel.findOne({ name: name });
  if (holding) {
    res.json(holding);
  } else {
    res.status(404).json(null);
  }
});
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrderModel.find({});
  res.json(allOrders);
});

app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
