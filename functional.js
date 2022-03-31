document.addEventListener('DOMContentLoaded', () => {
    const response = fetch('https://dog.ceo/api/breeds/image/random')
        .then(data=> data.json())
        .then(img => {
            const aDogImage = document.createElement('img')
            aDogImage.setAttribute('src', img.message)
            document.querySelector('body').appendChild(aDogImage)
        });
    const quote = fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(quote => {
            const aQuote = document.createElement('h3')
            aQuote.innerText =`${quote.content} —${quote.author}`
            document.querySelector('body').appendChild(aQuote)
        }
    )

   
})



