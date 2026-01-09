require("dotenv").config()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 2423

app.use(express.json())

// ===== HOMEPAGE =====
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "text/html")
  res.send(`
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>API Service</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      background: #0f172a;
      color: #e5e7eb;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .card {
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 12px;
      padding: 24px 28px;
      max-width: 420px;
      width: 90%;
      box-shadow: 0 10px 30px rgba(0,0,0,.4);
    }
    h1 {
      margin-top: 0;
      font-size: 22px;
    }
    p {
      line-height: 1.6;
      font-size: 14px;
      color: #cbd5f5;
    }
    .status {
      margin-top: 16px;
      padding: 10px 12px;
      background: #020617;
      border: 1px dashed #334155;
      border-radius: 8px;
      font-size: 13px;
    }
    footer {
      margin-top: 18px;
      font-size: 12px;
      color: #64748b;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 API Service Active</h1>
    <p>
      Ini adalah backend service berbasis Express.js.  
      Endpoint API berjalan normal dan siap menerima request.
    </p>

    <div class="status">
      <strong>Status:</strong> Online<br>
      <strong>Uptime:</strong> ${Math.floor(process.uptime())} detik<br>
      <strong>Port:</strong> ${PORT}
    </div>

    <footer>
      © ${new Date().getFullYear()} API Service
    </footer>
  </div>
</body>
</html>
  `)
})

// ===== CONTOH ENDPOINT API =====
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  })
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})
