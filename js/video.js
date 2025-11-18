const video = document.getElementById('video');
    const source = "PVRough.m3u8";   // ← your HLS playlist file

    // If browser supports HLS natively (Safari, iOS)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = source;

    // Otherwise use hls.js (Chrome, Firefox, Edge)
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(source);
      hls.attachMedia(video);
    } else {
      console.error("HLS not supported on this browser.");
    }