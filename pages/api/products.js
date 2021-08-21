import connectDb from "../../utils/connectDb";
import Products from '../../models/Product'

connectDb();

export default async (req, res) => {
  const products = await Products.find();
  res.status(200).json(products);
};
