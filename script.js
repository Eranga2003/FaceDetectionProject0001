const video = document.getElementById("video");

function webCam() {
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })
    .then((stream) => {
        console.log("Camera stream started");
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error("Error accessing the camera:", error);
    });
}

webCam();
