let f1 = document.querySelector('#f1');
let f2 = document.querySelector('#f2');
let f3 = document.querySelector('#f3');
let f4 = document.querySelector('#f4');
let f5 = document.querySelector('#f5');

f2.addEventListener('click', async () => {
    let uploadedfile = f1.files[0];

    if (!uploadedfile) {
        alert("Please select a file before uploading.");
        return;
    }

    let randomId = Math.floor(10000 + Math.random() * 90000).toString();

    const info = new FormData();
    info.append("file", uploadedfile);
    info.append("randomId", randomId);

    let res = await fetch('/upload', {
        method: 'POST',
        body: info
    });

    if (res.status === 200) {
        alert("File uploaded successfully");
        f3.textContent = randomId;  // Just showing the ID
    } else {
        alert("Upload failed");
    }
});

f5.addEventListener('click', () => {
    let id=f4.innerText;
    if (!id) {
        alert("No file ID to download.");
        return;
    }

    window.location.href = `/download/${id}`;
});
