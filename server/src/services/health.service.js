function getHealthStatus() {
  return {
    status: "ok",
    module: "Student Portal",
    timestamp: new Date().toISOString(),
  };
}

module.exports = {
  getHealthStatus,
};