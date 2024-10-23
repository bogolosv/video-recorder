import React, { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { MessageContext } from './const';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import classes from './styles/index.module.scss';
import { PaddingBox } from "../../components/PaddingBox";
import { createPortal } from "react-dom";

type MessageType = {
    id: number;
    content: ReactNode;
    x: number;
    y: number;
}

type MessageProviderPropsType = {
    children: ReactNode;
}

export const MessageProvider: FC<MessageProviderPropsType> = ({children}) => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const messageRef = useRef<{ [key: number]: HTMLDivElement }>({});
    const [container, setContainer] = useState<HTMLElement>();

    const hideTimeout = useCallback((messageId: number) => {
        setTimeout(() => {
            setMessages((messages) => {
                delete messageRef.current[messageId];
                return (
                    [...messages.filter(message => messageId !== message.id)]
                )
            });
        }, 5000);
    }, []);

    const openMessage = useCallback(async (message: ReactNode, event?: React.MouseEvent<Element, MouseEvent>) => {
        const now = Date.now();
        setMessages(prevState => [...prevState, {
            content: message,
            x: event?.clientX ?? 0,
            y: event?.clientY ?? 0,
            id: now,
        }]);
        hideTimeout(now);
    }, [hideTimeout]);

    useEffect(() => {
        const padding = 16;
        let previousTop = padding;
        setMessages(messages.reduce((previousValue, currentValue) => {
            const { height } = messageRef.current[currentValue.id].getBoundingClientRect();
            const newMessage = {
                ...currentValue,
                y: previousTop,
                x: padding,
            }
            previousTop += height + padding;
            return [
                ...previousValue,
                newMessage,
            ];
        }, [] as MessageType[]));
    }, [messages.length]);

    const messageElements = (
        <TransitionGroup className={classes.container}>
            {messages.map(({ id, content, y, x }) => (
                <CSSTransition
                    key={id}
                    timeout={300}
                    classNames={{
                        exitActive: classes.messageExitActive,
                        enter: classes.messageEnter,
                        enterActive: classes.messageEnterActive,
                    }}
                >
                    <div
                        className={classes.message}
                        ref={el => messageRef.current[id] = el!}
                        style={{ top: `${y}px`, left: `${x}px` }}
                    >
                        <PaddingBox medium>
                            {content}
                        </PaddingBox>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )

    return (
        <MessageContext.Provider value={{
            openMessage,
            setContainer,
        }}>
            {children}
            {container ? createPortal(messageElements, container) : messageElements}
        </MessageContext.Provider>
    );
}