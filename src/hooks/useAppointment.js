import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { apiGetAppointmentData } from "../services/apiGetAppointmentData";
import toast from "react-hot-toast";
export function useAppointment() {
    //useNavigate hook for navigation
    const navigate = useNavigate();
    
   
    //The useQueryClient hook is used for refreshing the cache management
    const queryClient = useQueryClient();

    //Destructured the useMutation and get the extracted data from the useMutation hook
    const { mutate, isPending } = useMutation({
        //API function
        mutationFn: (formData) => apiGetAppointmentData(formData),
        //The onSuccess function is called if the data is successfully sent 
        onSuccess: (data, variables) => {
            toast.success(`${variables?.fullName}, your appointment has successfully been scheduled!`);
            queryClient.invalidateQueries({ queryKey: ["appointmentForm"] }); // Invalidating the cache for appointment query
            //Redirects immediately on success, and also delays navigation briefly to let users read the success toast.
            setTimeout(() => navigate("/thankYouForAppointment", {state: variables}), 5000);
        },

        //The onError function is called if there's an error while sending the data to the API
        onError: (err) => toast.error(err.message), // Displaying error message if mutation fails
    });

    //The useContactForm function or custom hook returns the destructured data from the useMutation hook
    return { mutate, isPending };
}