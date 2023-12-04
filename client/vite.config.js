import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server :{
//     proxy :{
//       '/api':{ 
//       target: 'http://localhost:3000',
//     secure : false
//   },
// },
//   },
//   plugins: [react()],
// })

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    hmr: {
      overlay: true, // Enable overlay for HMR (Hot Module Replacement) errors
    },
  },
  plugins: [react()],
  esbuild: {
    jsxInject: 'import React from "react";', // Add this line if you're using JSX without importing React in every file
  },
});

