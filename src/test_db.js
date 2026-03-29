import pool from "./db.js"

const testDB = async () => {
    try {
        const res = await pool.query("select now()")
        console.log("DB connected: ", res.rows[0])
    } catch (error) {
        console.log("DB Error:", error)
    }
}

testDB()