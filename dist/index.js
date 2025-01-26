"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const prouct_routes_1 = __importDefault(require("./routes/prouct.routes"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use("/api/v1", prouct_routes_1.default);
mongoose_1.default
    .connect(process.env.DATABASE_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connected'));
app.listen(port, () => {
    console.log("Server running on port 3000");
});
