const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const studentRoutes = require("./routes/student.routes");

const notFoundHandler = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");

const { swaggerUi, openapiDocument } = require("./config/swagger");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// Swagger UI
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(openapiDocument)
);

// API routes
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/students", studentRoutes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;