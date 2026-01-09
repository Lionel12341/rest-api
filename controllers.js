exports.health = (req, res) => {
  res.json({
    status: "healthy",
    time: new Date().toISOString()
  })
}
