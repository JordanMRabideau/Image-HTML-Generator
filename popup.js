let input = document.getElementById("url").value;

function getCurrentTabUrl(callback) {  
    var queryInfo = {
      active: true, 
      currentWindow: true
    };
  
    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0]; 
      var url = tab.url;
      callback(url);
    });
}

function changeUrl(url) {
    console.log(url);
    return url
}

currentUrl = getCurrentTabUrl(function(url){
    changeUrl(url)
})

function clickEvent() {
    let input = document.getElementById("url").value;
    let newCode = document.getElementById("data")

    newCode.innerText = `<td class="image"><div data-blogger-escaped-style="margin: 0px;" style="margin: 0px;"><p class="separator" data-blogger-escaped-style="clear: both; text-align: center;" style="clear: both; text-align: center;"><br></p><div data-blogger-escaped-style="text-align: center;" style="text-align: center;"><p><a data-blogger-escaped-style="font-family: &quot;Times New Roman&quot;;" data-blogger-escaped-target="_blank" href="${currentUrl}" style="font-family: &quot;times new roman&quot;;"><img alt="santa friends 3D buttons" border="0" height="200" src="${input}" width="200" style=""></a></p></div></div><div data-blogger-escaped-style="text-align: center;" style="text-align: center;"><div data-blogger-escaped-style="margin: 0px;" style="margin: 0px;"><p><a data-blogger-escaped-style="font-family: &quot;Times New Roman&quot;; text-align: start;" data-blogger-escaped-target="_blank" href="${currentUrl}" style="font-family: &quot;times new roman&quot;;">Placeholder Text</a></p></div></div><div data-blogger-escaped-style="text-align: center;" style="text-align: center;"><div data-blogger-escaped-style="margin: 0px;" style="margin: 0px;"><p><br></p></div></div></td>`
}

let submit = document.getElementById("submit");
submit.addEventListener("click", clickEvent);