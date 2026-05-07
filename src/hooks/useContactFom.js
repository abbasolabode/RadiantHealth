import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createFormData } from "../services/apiSendContactFormData";


export function useContactForm() {
    //useNavigate hook for navigation
    const navigate = useNavigate();

    //The useQueryClient hook is used for refreshing the cache management
    const queryClient = useQueryClient();

    //Destructured the useMutation and get the extracted data
    const { mutate, isPending } = useMutation({
        //API function
        mutationFn: createFormData,
        //The onSuccess function is called if the data is successfully sent
        onSuccess: (data, variables) => {
            console.log(data)
            toast.success(`${variables?.firstName}, your form has been submitted successfully`);
            queryClient.invalidateQueries({ queryKey: ["contactForm"] }); // Invalidating the cache for appointment query
            //Redirects immediately on success, and also delays navigation briefly to let users read the success toast.
            setTimeout(() => navigate("/thankYou"), 5000);
        },

        //The onError function is called if there's an error while sending the data to the API
        onError: (err) => toast.error(err.message), // Displaying error message if mutation fails
    });

    //The useContactForm function or custom hook returns the destructured data from the useMutation hook
    return { mutate, isPending };
}