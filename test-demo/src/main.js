import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp();
app.config.productionTip = false;
app.use(Antd);

createApp(App).mount('#app');
