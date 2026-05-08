import { useEffect, useRef, useState } from "react";

export function useHandleOutsideClick(listening = true) {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef();

    const handleCloseModal = () => {
        setIsOpen(false);
    }


    //Automatic display of modal using the timer function
    useEffect(() => {
        //A Timer is needed to automatically popup the modal
        const timer = setInterval(() => {
            if (isOpen) return;
            setIsOpen(true)
        }, 20000);

        //Clean up function
        return () => clearInterval(timer);
    }, [])


    useEffect(() => {
        //A callback function to handle the outside click
        function handleOutsideClick(e) {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                handleCloseModal();
            }
        }
        document.addEventListener("click", handleOutsideClick, listening);

        return () => document.removeEventListener("click", handleOutsideClick, listening)
    }, [handleCloseModal])


    //The useEffect that handles the key pressed 
    useEffect(() => {
        function handleEscapeClick(e) {
            //If the key pressed is equal to "Escape" key then close the modal
            if (e.key === "Escape") {
                handleCloseModal();
            };
        };

        document.addEventListener("keydown", handleEscapeClick);
        //Cleanup fn
        return () => document.removeEventListener("keydown", handleEscapeClick);

    }, [handleCloseModal]);


    return { modalRef, setIsOpen, isOpen };
}