// js/analytics.js
import { inject } from '@vercel/analytics';
import { inject as speedInject } from '@vercel/speed-insights';

inject();
speedInject();

console.log('✅ Vercel Analytics ativado!');