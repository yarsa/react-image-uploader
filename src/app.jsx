import { createRoot } from 'react-dom/client'
import PhotoUploader from './components/PhotoUploader'

const appContainer = document.getElementById('app')
const root = createRoot(appContainer)
root.render(<PhotoUploader />)
