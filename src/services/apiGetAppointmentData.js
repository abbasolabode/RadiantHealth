import supabase from "./supabase";

export async function apiGetAppointmentData(formData) {
    //If there's no form data, we return early to avoid unnecessary API calls and potential errors. This is a safeguard to ensure that we only attempt to insert data when we have valid input.
    if(!formData) return;
    console.log(formData, "form data from api function")
    const { data, error } = await supabase
        .from('appointmentForm')
        .insert([formData])//Inserting the form data into the appointmentForm table in Supabase. The data is wrapped in an array because the insert method expects an array of records, even if we're only inserting one record. After the insert operation, we use .select() to return the inserted data, which can be useful for confirmation or further processing.
        .select();

    //Error handling: If there's an error during the insert operation, we log the error to the console for debugging purposes and throw a new error with a user-friendly message. This allows us to handle errors gracefully in the UI and provide feedback to the user if something goes wrong.
    if (error) {
        console.error("Error fetching appointment data:", error);
        throw new Error("Failed to fetch appointment data");
    };

    //If the insert operation is successful, we return the inserted data. The data returned from Supabase is typically an array of records, even if we're only inserting one record. By returning data ?? [], we ensure that we return an empty array if data is null or undefined, which can help prevent errors in the UI when trying to access the returned data.
    return data ?? [];
}