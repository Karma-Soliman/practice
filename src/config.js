import dotenv from "dotenv"

dotenv.config()

export const config = {
    PORT: process.env.PORT,
    node_env: process.env.NODE_ENV,
    
} 

export default config