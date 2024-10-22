// import { useMediaStream } from "./hooks/useMediaStream.ts";
// import { useEffect } from "react";
import { VideoRecorder } from "./components/VideoRecorder";
import { FlexBox } from "./components/FlexBox";
import { Title } from "./components/Topography/Title";

function App() {
    // const { stream } = useMediaStream();
    // useEffect(() => {
    //     console.log(stream?.getTracks())
    // }, [stream]);
    return (
        <FlexBox column gap='medium'>
            <Title>Recordify</Title>
            <VideoRecorder/>
        </FlexBox>
    );
}

export default App
