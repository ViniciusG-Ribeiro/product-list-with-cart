import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null); 

    const openModal = (data) => {
        setIsOpen(true);
        setModalData(data);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalData(null);
    };

    return (
        <ModalContext.Provider value={{ isOpen, modalData, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    return useContext(ModalContext);
}
