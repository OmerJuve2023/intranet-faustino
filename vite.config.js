import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        //siempre se cambiará de acuerdo a la red
        host: "192.168.36.56"
    },
    base: "https://omerjuve2023.github.io/intranet-faustino/"
})
