const WoocommerceKey = require('../config/woocommercekeys')

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
    url: WoocommerceKey.WOO_SITE_URL,
    consumerKey: WoocommerceKey.WOO_CONSUMER_KEY,
    consumerSecret: WoocommerceKey.WOO_CONSUMER_SEC,
    version: 'wc/v3'
});

exports.getTotal = (req, res) => {
  async function process() {
    WooCommerce.get("products")
      .then((response) => {
        res.json(response.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  process();
};

exports.getByPage = (req, res) => {
  const pageId = req.params.pageId;
  async function process() {
    WooCommerce.get("products?page=" + pageId + "&per_page=20&status=publish")
      .then((products) => {
        if (!products) {
          res.status(404).send("No Product");
        } else {
          res.json(products.data);
        }
      })
      .catch((err) => {
        res.status(500).send("Server Error");
      });
  }
  process();
};

exports.getById = (req, res) => {
  const id = req.params._id;
  async function process() {
    WooCommerce.get("products/" + id)
      .then((response) => {
        res.json(response.data)
      })
      .catch((error) => {

      });
  }
  process();
};