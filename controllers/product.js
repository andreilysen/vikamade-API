const axios = require("axios");
require("dotenv").config();

const getCategory = async (_req, res, next) => {
  try {
    await axios
      .get("https://my.prom.ua/api/v1/groups/list?limit=10000", {
        headers: { Authorization: `Bearer ${process.env.PROM_TOKEN}` },
      })
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    next(error);
  }
};

const getList = async (req, res, next) => {
  try {
    await axios
      .get(
        `https://my.prom.ua/api/v1/products/list?limit=10000&group_id=${req.query.id}`,
        {
          headers: { Authorization: `Bearer ${process.env.PROM_TOKEN}` },
        }
      )
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    await axios
      .get(`https://my.prom.ua/api/v1/products/${req.query.id}`, {
        headers: { Authorization: `Bearer ${process.env.PROM_TOKEN}` },
      })
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    next(error);
  }
};

// const https = require("https");

// const AUTH_TOKEN = process.env.PROM_TOKEN; // Your authorization token
// const HOST = "my.prom.ua"; // e.g.: my.prom.ua, my.tiu.ru, my.satu.kz, my.deal.by, my.prom.md
// const PORT = 443;

// class EvoExampleAPI {
//   constructor(token) {
//     this.token = token;
//   }

//   makeApiCall(method, url, body) {
//     return new Promise((resolve, reject) => {
//       let options = {
//         hostname: HOST,
//         port: PORT,
//         path: url,
//         method: method,
//         headers: {
//           Authorization: `Bearer ${this.token}`,
//           "Content-Type": "application/json",
//         },
//       };

//       console.log("options:", options);

//       if (body) {
//         body = JSON.stringify(body);
//         options["headers"]["Content-Length"] = body.length;
//       } else {
//         body = "";
//       }

//       const req = https.request(options, (res) => {
//         let result = "";

//         res.setEncoding("utf8");

//         res.on("data", (chunk) => {
//           result += chunk;
//         });

//         res.on("end", () => {
//           resolve(JSON.parse(result));
//         });
//       });

//       req.on("error", (e) => {
//         reject(e);
//       });

//       req.write(body);
//       req.end();
//     });
//   }

//   getGroupsList() {
//     const method = "GET";
//     const url = "/api/v1/groups/list?limit=10000";

//     return this.makeApiCall(method, url, null);
//   }
// }

// const getCategory = async (_req, res, next) => {
//   const client = new EvoExampleAPI(AUTH_TOKEN);
//   //   let orderId;

//   client.getGroupsList().then(
//     (orderList) => {
//       res.json(orderList);
//       //   if (!orderList["orders"]) throw new Error("Sorry, there's no any order!");
//       //   console.log(orderList);
//       //   orderId = orderList;
//       //   return orderList;
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
//   //   return getOrderId;
// };

module.exports = { getCategory, getList, getProduct };
