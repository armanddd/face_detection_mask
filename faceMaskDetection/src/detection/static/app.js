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
            // console.log(this.result);
            // console.log("oh")
            document.cookie = "path=" + files.name.replace(/ /g,"_") + "; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";
        });
        fileReader.readAsDataURL(files);
    }
});

// fonction vidéo/screenshot
let video = document.querySelector("#video");
let canvas = document.querySelector("#canvas");


document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("id_caption").value = "test";
    document.getElementById("id_caption").style.display = "none";
    document.evaluate('/html/body/div[1]/form/p[1]/label', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.style.display = "none"
});
