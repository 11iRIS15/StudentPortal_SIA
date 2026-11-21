const fs = require("fs");
const path = require("path");
const yaml = require("yaml");
const swaggerUi = require("swagger-ui-express");

const openapiPath = path.join(__dirname, "../../openapi.yaml");

const openapiDocument = yaml.parse(
  fs.readFileSync(openapiPath, "utf8")
);

module.exports = {
  swaggerUi,
  openapiDocument,
};