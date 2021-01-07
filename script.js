const videoElement = document.getElementById("video");
const button = document.getElementById("button");

function playVideo() {
  videoElement.onloadeddata = () => {
    videoElement.play();
  };
}

function startPictureInPicture() {
  //disabling Start button
  button.disabled = true;
  //starting picture in picture
  videoElement.requestPictureInPicture();
  //activating start button
  button.disabled = false;
}

// asking the user to select media stream
async function selectMediaToStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    playVideo();
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => startPictureInPicture);

selectMediaToStream();
