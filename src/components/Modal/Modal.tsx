import { FC, ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import classes from './styles/index.module.scss';
import { Button } from "../Button";
import { CloseIcon } from "../../icons/CloseIcon.tsx";
import { createPortal } from "react-dom";
import { Flex } from "antd";
import { Span } from "../Topography/Span";
import { CSSTransition } from "react-transition-group";
import { LoadingIcon } from "../../icons/LoadingIcon.tsx";

type ModalPropsType = {
    title: ReactNode;
    open?: boolean;
    onClose?: () => void;
    children?: ReactNode;
    footer?: ReactNode;
    loading?: boolean;
    container?: HTMLElement;
    removeContainerOnExit?: boolean;
}

export const Modal: FC<ModalPropsType> = (
    {
        title,
        open,
        children,
        onClose,
        footer,
        loading,
        container,
        removeContainerOnExit,
    }
) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    const div = useMemo(() => {
        return document.createElement('div');
    }, []);

    const root = useMemo(() => {
        return container ? container : div;
    }, [container, div]);

    const onCSSTransitionExited = useCallback(() => {
        if (removeContainerOnExit) {
            root?.remove();
        }
    }, [removeContainerOnExit, root]);
    const onCSSTransitionEnter = useCallback(() => {
        if (removeContainerOnExit) {
            document.body.after(root);
        }
    }, [removeContainerOnExit, root]);

    useEffect(() => {
        if (!container) {
            document.body.after(root);
        }
        return () => {
            if (!container) {
                root?.remove();
            }
        }
    }, [container, root]);

    return (
        <>
            {createPortal(
                <CSSTransition
                    in={open}
                    timeout={300}
                    nodeRef={nodeRef}
                    mountOnEnter
                    unmountOnExit
                    onExited={onCSSTransitionExited}
                    onEnter={onCSSTransitionEnter}
                    classNames={{
                        enterActive: classes.modal_visible,
                        enterDone: classes.modal_visible,
                        exitActive: classes.modal_hidden,
                        exitDone:  classes.modal_hiddenDone
                    }}
                >
                    <div ref={nodeRef} className={classes.modal}>
                        <div className={classes.background} onClick={onClose}/>
                        <div className={classes.window}>
                            <Flex vertical gap='large'>
                                <Flex justify='space-between' align='center'>
                                    <Span size='medium'>{title}</Span>
                                    {onClose && (<Button Icon={CloseIcon} onClick={onClose} size='small'/>)}
                                </Flex>
                                {children}
                                <Flex justify="center" gap='small' align='center'>
                                    {footer}
                                </Flex>
                            </Flex>
                            {loading && (
                                <Flex justify='center' align='center' className={classes.loading}>
                                    <LoadingIcon/>
                                </Flex>
                            )}
                        </div>
                    </div>
                </CSSTransition>,
                root,
            )}
        </>
    );
}