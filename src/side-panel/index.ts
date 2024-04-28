import '@/assets/base.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { useSidePanelStore } from '@/stores/side-panel.store'
import App from './app.vue'
import './index.scss'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    routes.push({
      path: '/',
      redirect: '/side-panel',
    })

    return routes
  },
})

createApp(App).use(router).use(createPinia()).mount('#app')

// console.log(router.getRoutes())

console.log('Side Panel Loaded');


self.onerror = function (message, source, lineno, colno, error) {
  console.info(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${error}`
  )
}


// side-panel.js
// Enviar un mensaje al content script para solicitar información
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const activeTab = tabs[0];
  if (activeTab) {
    chrome.tabs.sendMessage(activeTab.id, { type: 'GET_PAGE_INFO' });
  }
});

// Escuchar mensajes desde el background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'PAGE_INFO') {
    console.log('Información recibida:', message.data);

    // Puedes mostrar esta información en el side panel
      // Obtener el store
      const store = useSidePanelStore();

      // Usar una acción del store para pasar la información
      store.updatePageInfo(message.data.title, message.data.content); // Actualiza el estado
  }
});

