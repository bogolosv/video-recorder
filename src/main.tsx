import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { MediaDevicesProvider } from "./providers/MediaDevices/MediaDevicesProvider.tsx";
import { MessageProvider } from "./providers/Message/MessageProvider.tsx";
import { HelmetProvider } from "./providers/Helmet/HelmetProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <MessageProvider>
                <MediaDevicesProvider>
                    <App />
                </MediaDevicesProvider>
            </MessageProvider>
        </HelmetProvider>
    </StrictMode>,
)
