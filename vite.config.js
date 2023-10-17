import Inspect from 'vite-plugin-inspect'
import {resolve} from 'path'


export default{
  plugins: [Inspect()],
  build: {
    rollupOptions: {
      input:{
        main: resolve(_dirname, 'index.html'),
        login: resolve(_dirname, 'login/index.html')
      }
    }
  }
}
