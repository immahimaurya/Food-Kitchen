/**
    * @description      : 
    * @author           : Admin
    * @group            : 
    * @created          : 27/12/2023 - 15:55:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 27/12/2023
    * - Author          : Admin
    * - Modification    : 
**/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});