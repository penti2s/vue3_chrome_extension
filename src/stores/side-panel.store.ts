import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useSidePanelStore = defineStore('sidePanel', () => {
  const pageTitle = useStorage('sidePanel.title', '');
  const pageContent = useStorage('sidePanel.content', '');

  // Función para actualizar el estado
  const updatePageInfo = (title: string, content: string) => {
    pageTitle.value = title; 
    pageContent.value = content; 
  };

  return {
    pageTitle,
    pageContent,
    updatePageInfo,
  };
});
