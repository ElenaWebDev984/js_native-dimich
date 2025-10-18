
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {sum} from "./03-functions/03.ts";

const a = sum;
console.log(a)

createRoot(document.getElementById('root')!).render(<App />)
