import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MediaDevicesProvider } from "./providers/MediaDevices/MediaDevicesProvider.tsx";
import { MessageProvider } from "./providers/Message/MessageProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MessageProvider>
            <MediaDevicesProvider>
                <App />
            </MediaDevicesProvider>
        </MessageProvider>
    </StrictMode>,
)
