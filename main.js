function playVideo(device) {
  document.getElementById("choice-screen").style.display = "none";
  document.getElementById("video-screen").style.display = "block";

  const videoSource = document.getElementById("video-source");
  videoSource.src = `${device}.mp4`; // No folder, just file in root

  const video = document.getElementById("intro-video");
  video.load();
  video.play();

  video.onended = () => {
    window.location.href = `${device}.html`;
  };
}