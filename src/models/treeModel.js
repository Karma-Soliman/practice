import pool from "../db.js"

export const findAllTrees = async () => {
  const res = await pool.query("SELECT * FROM tree_names")
  return res.rows
}

export const findTreeById = async (id) => {
  const res = await pool.query("SELECT * FROM tree_names WHERE id = $1", [id])
  return res.rows[0]
}

export const createTree = async (tree) => {
  const { name } = tree
  const res = await pool.query(
    "INSERT INTO tree_names(name) VALUES($1) RETURNING *",
    [name],
  )
  return res.rows[0]
}
