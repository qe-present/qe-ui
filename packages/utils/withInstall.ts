import type { App, Component, Plugin } from 'vue';

type SFCInstall<T> = T & Plugin;

export function withInstall<T extends Component>(component: T): SFCInstall<T> {
  (component as SFCInstall<T>).install = (app: App) => {
    const name = (component as any).__name || (component as any).name;
    if (name) app.component(name, component);
  };
  return component as SFCInstall<T>;
}