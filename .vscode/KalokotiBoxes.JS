const blob = document.getElementById("blob");

document.onpointermove = event => {
    const { clientX, clientY } = event;

    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;
}
