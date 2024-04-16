export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Process the incoming POST request data
      const data = req.body

      console.log("Received POST request:", data)

      // Respond with a success message
      res.status(200).json({ message: "POST request received successfully" })
    } catch (error) {
      // Handle any errors
      console.error("Error processing POST request:", error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  } else {
    // Respond with a 405 Method Not Allowed error for non-POST requests
    res.status(405).end()
  }
}
