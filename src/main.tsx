import { createRoot } from 'react-dom/client';
import { RouterManager } from './routes';
import './styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(<RouterManager />)
