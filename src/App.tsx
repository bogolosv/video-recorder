// import { useMediaStream } from "./hooks/useMediaStream.ts";
// import { useEffect } from "react";
import { VideoRecorder } from "./components/VideoRecorder";

function App() {
    // const { stream } = useMediaStream();
    // useEffect(() => {
    //     console.log(stream?.getTracks())
    // }, [stream]);
    return (
        <VideoRecorder/>
    );
}

export default App
