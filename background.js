// chrome.runtime.onInstalled.addListener(() => {
//     console.log("onInstalled...");
//     async function startRequest() {
//         const response = await fetch("https://api.unsplash.com/photos/?client_id=QzaQ48vxwV5f-Raj5gu5Y1jkFyXvUr_UbYZRoNIxL4A");
//         const newData = await response.json();
//         // const data = `${newData.content} —${newData.author}`;
//         console.log(newData);
//       }

// chrome.runtime.onInstalled.addListener(() => {
//     console.log("onInstalled...");
  
//     // create alarm after extension is installed / upgraded
//     chrome.alarms.create("startRequest", { periodInMinutes: 4 });
//     startRequest();
//   });
  
//   chrome.alarms.onAlarm.addListener((alarm) => {
//     startRequest();
//   });
  
//   async function startRequest() {
//     const response = await fetch("https://api.quotable.io/random");
//     const newData = await response.json();
//     const data = `${newData.content} —${newData.author}`;
//     console.log(data);
  
//     var options = {
//       title: "Random Quotes",
//       message: data,
//       iconUrl: "/images/favicon-16x16.png",
//       type: "basic",
//       // requireInteraction: true
//     };
//     chrome.notifications.create("", options);
//   }

document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var f = d.createElement('form');
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
      });
    }, false);
  }, false);

// This will be needed for the header when making get request
//       secret key: DNbeWijaaZzqnJA-21nm0ut2fM3E0SEWgFqDwbhDsr0
//       access key : QzaQ48vxwV5f-Raj5gu5Y1jkFyXvUr_UbYZRoNIxL4A
//   });