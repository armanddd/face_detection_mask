// Grabbing Elements and Storing in Variables
const defaultFile = document.getElementById("id_image");
// const customBtn = document.getElementById("custom-btn");
// const customSpace = document.getElementById("custom-space");


/*customBtn.addEventListener("click", function () {
    defaultFile.click();
});*/


// File Upload
defaultFile.addEventListener("change", function () {
    //  Format Selected File Text
    if (defaultFile.value) {
        defaultFile.innerHTML = defaultFile.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1] + "?";
    }
    else {
        defaultFile.innerHTML = "No File, Selected!?";
    }

    // Image Preview
    const files = defaultFile.files[0]; //files[0] - For getting first file
    console.log(files);
    //   console.log(files);

    if (files) {
        // Showing Image and Hiding "Image Preview" Text
        preview_img.style.display = "block"; //var existe pas ?
        preview_text.style.display = "none"; //var existe pas ?
        //Read File
        const fileReader = new FileReader();

        fileReader.addEventListener("load", function () {
            // convert image to base64 encoded string
            preview_img.setAttribute("src", this.result); //var existe pas ?
            console.log(this.result);
            console.log("oh")
            document.cookie = "path=" + files.name.replace(/ /g,"_") + "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
        });
        fileReader.readAsDataURL(files);
    }
});

// fonction vidéo/screenshot
let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
   	let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
	video.srcObject = stream;
});

click_button.addEventListener('click', function(ev) {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
   	let image_data_url = canvas.toDataURL('image/*');
    // Stop all video streams.
    video.srcObject.getVideoTracks().forEach(track => track.stop());
   	// data url of the image
   	console.log(image_data_url);
}, false);