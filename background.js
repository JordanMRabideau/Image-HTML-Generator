chrome.runtime.onInstalled.addListener(function(tab) {
    console.log(tab.url)
    // chrome.storage.sync.set({url: tab.url}, function() {
    //   console.log(tab.url);
    // });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'buttonsgaloreandmore.com', schemes: ['https']},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});