import connectDb from "../../utils/connectDb";
import Product from "../../models/Product";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await getHandler(req, res);
      break;
    case "DELETE":
      await deleteHandler(req, res);
      break;
    default:
      res.status(405).send(`Method ${res.method} Not Allowed!`);
      break;
  }
};

async function getHandler(req, res) {
  const { _id } = req.query;
  const product = await Product.findOne({ _id });
  res.status(200).json(product);
}

async function deleteHandler(req, res) {
  const { _id } = req.query;
  await Product.findOneAndDelete({ _id });
  res.status(204).json({});
}
