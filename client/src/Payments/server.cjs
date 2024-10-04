const express = require("express");
const plaid = require("plaid");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

app.use(express.json());

const port = 3000;

const client = new plaid.PlaidApi(
  new plaid.Configuration({
    basePath: plaid.PlaidEnvironments["sandbox"],
    baseOptions: {
      headers: {
        "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
        "PLAID-SECRET": process.env.PLAID_SECRET,
        "Plaid-Version": "2020-09-14",
      },
    },
  })
);

app.post("/create_link_token", async (req, res) => {
  try {
    const response = await client.linkTokenCreate({
      user: {
        client_user_id: "CodingWithAdo",
      },
      client_name: "Ado",
      products: ["transactions"],
      required_if_supported_products: ["auth"],
      country_codes: ["us"],
      language: "en",
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error", error);

    res.json({
      error: error.message,
    });
  }
});

app.post("/get_access_token", async (req, res) => {
  try {
    const publicToken = req.body.publicToken;
    const response = await client.itemPublicTokenExchange({
      public_token: publicToken,
    });

    res.json({ accessToken: response.data.access_token });
  } catch (error) {
    console.error("Error", error);

    res.json({
      error: error.message,
    });
  }
});

app.post("/get_transactions", async (req, res) => {
  try {
    const response = await client.transactionsGet({
      access_token: req.body.token,
      start_date: "2023-01-01",
      end_date: "2023-12-31",
      options: {
        offset: 0,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error", error);
    res.json({
      error: error.message,
    });
  }
});

app.listen(port);
