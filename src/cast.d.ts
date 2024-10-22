declare namespace chrome {
    namespace cast {
        interface Session {
            loadMedia: (request: LoadRequest) => Promise<Media>;
        }

        interface Media {
        }

        namespace media {
            interface MediaInfo {
                contentId: string;
                contentType: string;
            }

            interface LoadRequest {
                media: MediaInfo;
            }
        }

        enum SessionState {
            NO_SESSION,
            SESSION_STARTED,
            SESSION_ENDED,
        }

        enum AutoJoinPolicy {
            ORIGIN_SCOPED,
            PAGE_SCOPED,
        }

        namespace framework {
            class CastContext {
                static getInstance(): CastContext;
                setOptions(options: { receiverApplicationId: string; autoJoinPolicy: AutoJoinPolicy }): void;
                addEventListener(eventType: string, listener: (event: any) => void): void;
                removeEventListener(eventType: string, listener: (event: any) => void): void;
                requestSession(): Promise<Session>;
                getSession(): Session | null;
            }

            enum CastContextEventType {
                SESSION_STATE_CHANGED,
            }
        }
    }
}
