// var c = chrome;
// debugger;

// var rule = {
//     priority: 1,
//     conditions: [
//         new chrome.declarativeWebRequest.RequestMatcher({
//             stages: ['onBeforeSendHeaders']
//         }),
//     ],
//     actions: [
//         new chrome.declarativeWebRequest.SetRequestHeader({
//             name: 'Referer',
//             value: 'Modifed'
//         })
//     ]
// };

// chrome.declarativeWebRequest.onRequest.addRules([
//     rule
// ]);
//console.log('loaded');
debugger;
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'Referer') {
                // Modify the header value here
                details.requestHeaders[i].value = 'ModifiedHeaderValue';
                break;
            }
        }
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ['<all_urls>'] },
    ['blocking', 'requestHeaders']
);
