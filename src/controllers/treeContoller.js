import * as treeService from "../services/treeService.js"

export const getTree = async (req, res) => {
  const tree = await treeService.getAllTrees()
  res.json(tree)
}

export const createTree = async (req, res) => {
  const tree = await treeService.addTree(req.body)
  res.status(201).json(tree)
}
