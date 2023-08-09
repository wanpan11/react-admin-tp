/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ROUTER_BASE_NAME: string;
  readonly VITE_BASE_REQUEST_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
