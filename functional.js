document.addEventListener('DOMContentLoaded', () => {
    const response = fetch('https://dog.ceo/api/breeds/image/random')
        .then(data=> data.json())
        .then(img => {
            const aDogImage = document.createElement('img')
            aDogImage.setAttribute('src', img.message)
            document.querySelector('body').appendChild(aDogImage)
        });
})


