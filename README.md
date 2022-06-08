# chrome-extension

Repository for my first Google Chrome Extension

Presentation Outline:

1. Show off:
   -Idea: Create an extension that makes frustrated web developers smile when they need and feel motivated again! (Tim)
   -Goal: We wanted to create an extension that fetches random inspirational quotes and random photos of dogs to display when the extension icon is pressed. (Tim)
   -Demo: 3 times (Jessica)
   -Show that each click initiates a new get request and displays a different quote and a different image!

2. Technical Challenges
   -Challenge 1: Refining our idea to something feasible within our time. (Tim)
   --We tried first to display the image in a chrome notification
   --We discovered that the image option was deprecated and therefore not possible! We decided to reevaluate our extension.
   --We tried instead displaying a dog image in a popup that displays when the extension icon is clicked.
   -Challenge 2: Understanding how default*popup and popup.js work (Jessica)
   --We had a simple typoe where we replaced the * in default_pop with a -, and therefore it was not working;
   --We overcame this by debugging and now know that we can easily check for such a typo when having a similar bug in the future.
   -Challenge 3: Understanding how to interract with various web APIs to fetch dog images and inspirational quotes (Tim)
   --We parsed through documentation and different tutorials to see how others have done their own requests
   --We managed to aprropriately fetch the data
   -Challenge 4: We struggled with using the background.js file necessary for chrome extensions as a JS file to manipulate the popup DOM (Jessica)
   --We researched and decided to create a separate JS file that adds functionality to the popup HTML file
   --After solving this, we moved our requests to the new JS file so that we could interract with the popup DOM
   -Challenge 5: not waking up everybody in our house when eveyrthing worked by screwaming so loudly!
