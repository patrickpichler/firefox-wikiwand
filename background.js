let pattern = "https://*.wikipedia.org/wiki/*";
let regex = /https:\/\/([a-zA-Z]*)\.wikipedia.org\/wiki\/(.*)/  

let buildURL = (lang, article) => `https://www.wikiwand.com/${lang}/${article}`

let redirect = (requestDetails) => {
  console.log("Redirecting: " + requestDetails.url)

  let [_, lang, article] = regex.exec(requestDetails.url) || []

  return {
    redirectUrl: buildURL(lang, article) 
  }
}

browser.webRequest.onBeforeRequest.addListener(
 redirect,
  {urls: [pattern]},
  ["blocking"]
);
