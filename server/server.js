require("dotenv").config();

const connectDB = require("./src/config/db");
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");
const yaml = require("yaml");

const studentRoutes = require("./src/routes/student.routes");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors({
  origin: process.env.CLIENT_URL
    ? process.env.CLIENT_URL.split(",")
    : true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "Student Portal API",
    timestamp: new Date().toISOString()
  });
});

// API root
app.get("/api/v1", (req, res) => {
  res.json({
    message: "Welcome to the IDSC Student Portal API",
    version: "1.0.0",
    documentation: "/docs"
  });
});

// Student Portal routes
app.use("/api/v1", studentRoutes);

// Swagger
const openapiPath = path.join(__dirname, "openapi.yaml");

if (fs.existsSync(openapiPath)) {
  const openapiDocument = yaml.parse(
    fs.readFileSync(openapiPath, "utf8")
  );

  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(openapiDocument)
  );
} else {
  app.get("/docs", (req, res) => {
    res.status(500).send("OpenAPI file is missing.");
  });
}

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    type: "about:blank",
    title: "Not Found",
    status: 404,
    detail: `Route ${req.method} ${req.originalUrl} was not found.`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    type: "about:blank",
    title: "Internal Server Error",
    status: err.status || 500,
    detail: err.message || "An unexpected server error occurred."
  });
});


async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Student Portal API running on port ${PORT}`);
    console.log(`API: http://localhost:${PORT}/api/v1`);
    console.log(`Swagger: http://localhost:${PORT}/docs`);
  });
}

startServer();
