// api/video_feed2.js
module.exports = async (req, res) => {
    const { ip } = req.query; // Get IP from query parameters
    const videoUrl = `http://${ip}:8080/`; // Construct the full URL
  
    const response = await fetch(videoUrl);
    const stream = response.body;
  
    res.setHeader('Content-Type', 'multipart/x-mixed-replace; boundary=frame');
    stream.pipe(res); // Pipe the video stream to the client
  };
  