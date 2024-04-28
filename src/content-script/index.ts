import './index.scss'

const src = chrome.runtime.getURL('src/content-script/iframe/index.html')

const iframe = new DOMParser().parseFromString(
  `<iframe class="crx-iframe" src="${src}"></iframe>`,
  'text/html'
).body.firstElementChild

if (iframe) {
  document.body?.append(iframe)
}

self.onerror = function (message, source, lineno, colno, error) {
  console.info(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}


// content.js
const pageTitle = document.title;
const pageContent = document.body.innerText;

// Enviar la información al background script o al side panel
chrome.runtime.sendMessage({
  type: 'PAGE_INFO',
  data: {
    title: pageTitle,
    content: pageContent,
  },
});
