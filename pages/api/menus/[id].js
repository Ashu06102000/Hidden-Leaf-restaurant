import dbConnect from '../../../utils/mongo'
import Menus from '../../../models/Menus'

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req

  // const token = cookies.token

  dbConnect()

  if (method === 'GET') {
    try {
      const products = await Menus.findById(id)
      res.status(200).json(products)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  if (method === 'PUT') {
    if (!token || token !== process.env.token) {
      return res.status(401).json('Not authenticated!')
    }
    try {
      const product = await Menus.create(req.body)
      res.status(201).json(product)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  if (method === 'DELETE') {
    if (!token || token !== process.env.token) {
      return res.status(401).json('Not authenticated!')
    }
    try {
      const product = await Menus.create(req.body)
      res.status(201).json(product)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
