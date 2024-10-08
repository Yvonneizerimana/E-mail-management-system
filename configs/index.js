import dotenv from 'dotenv';
dotenv.config()

const configuration={
    CONNECTION:process.env.MONGO_URI,
    PORT:process.env.PORT,
    sendGridKey:process.env.SENDGRID_KEY,
    tokenSecretKey:process.env.TOKEN_SECRET_KEY,
    apiKey: process.env.API_KEY,
}

export default configuration;
