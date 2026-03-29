import * as treeModel from "../models/treeModel.js"

export const getAllTrees = async () => {
  return await treeModel.findAllTrees()
}

export const getTree = async (id) => {
  return await treeModel.findTreeById(id)
}

export const addTree = async (data) => {
  return await treeModel.createTree(data)
}
