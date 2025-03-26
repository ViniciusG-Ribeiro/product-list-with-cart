import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState(null); // Guardar dados do pedido

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

// Hook customizado para facilitar o uso do contexto
export function useModal() {
    return useContext(ModalContext);
}
