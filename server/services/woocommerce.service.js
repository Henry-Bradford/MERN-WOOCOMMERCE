const WoocommerceKey = require('../config/woocommercekeys')

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
    url: WoocommerceKey.WOO_SITE_URL,
    consumerKey: WoocommerceKey.WOO_CONSUMER_KEY,
    consumerSecret: WoocommerceKey.WOO_CONSUMER_SEC,
    version: 'wc/v3'
});

exports.getTotal = (req, res) => {
  const pageId = req.params.pageId;
  async function process() {
    WooCommerce.get("reports/products/totals")
      .then((result) => {
        if (!result) {
          res.status(404).send("No Product");
        } else {
          res.json(result.data);
        }
      })
      .catch((error) => {
        res.status(500).send("Server Error");
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
  const _id = req.params._id;
  async function process() {
    WooCommerce.get("products/" + _id)
      .then((product) => {
        if (!product) {
          res.status(404).send("No Data");
        } else {
          NoteModel.findOne({ targetId: _id }, function (err, note) {
            if (err || !note) {
              res.json(product.data);
            } else {
              res.json({ ...product.data, userNote: note.userNote });
            }
          });
        }
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
  process();
};