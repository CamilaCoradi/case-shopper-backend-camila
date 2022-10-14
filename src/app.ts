import express from "express";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());

const { PORT = 3003 } = process.env
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});

export default app;