
function allowXFrame(details) {
  var HEADERS_TO_STRIP_LOWERCASE = [
    'content-security-policy',
    'x-frame-options',
  ];
  return {
    responseHeaders: details.responseHeaders.filter(function(header) {
      return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0;
    })
  }
}

chrome.webRequest.onHeadersReceived.addListener(allowXFrame,
  {
    urls: ["<all_urls>"],
    types: [ 'sub_frame' ],
  },
  ["blocking", "responseHeaders"]
);
