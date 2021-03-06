const app = require("express")();
const stripe = require("stripe")("sk_test_FcgrRFIP91UBWK3tl4dtEwOr");
const port = process.env.PORT || 8080;

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 202,
        currency: "MYR",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
