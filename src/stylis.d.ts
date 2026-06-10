// Minimal ambient types for `stylis` (no @types package added).
// We only use the `prefixer` middleware for the Emotion RTL cache.
declare module 'stylis' {
  import type { StylisPlugin } from '@emotion/cache'
  export const prefixer: StylisPlugin
}
