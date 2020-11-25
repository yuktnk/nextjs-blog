export default function handler(req, res) {
  const {
    query: { pid },
  } = req
  // const pid = req.query.pid
  
  res.end(`Post: ${pid}`)
}