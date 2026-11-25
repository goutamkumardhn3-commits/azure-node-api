
const express = require("express");

const app = express();

app.use(express.json());

// Health check API
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Node.js API is running successfully!"
  });
});

// Get all items
app.get("/api/items", (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      { id: 1, name: "Laptop", price: 75000 },
      { id: 2, name: "Mobile", price: 25000 }
    ]
  });
});

// Get server status
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  });
});

// Azure provides PORT through environment variables.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
