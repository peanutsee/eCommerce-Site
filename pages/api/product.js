import connectDb from "../../utils/connectDb";
import Product from '../../models/Product'

connectDb();

export default async (req, res) => {
    const { _id } = req.query;
  const products = await Product.findOne({ _id: _id });
  res.status(200).json(products);
};
