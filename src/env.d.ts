/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROJECT_NAME: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
