import dbConnect from "../../../utils/mongo";
import Order from "../../../models/Order";

export default async function handler (req, res){
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === "GET") {
    try {
      const orders = await Order.findById(id);
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "PUT") {
    try {
      const orders = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === "DELETE") {
  }
};
