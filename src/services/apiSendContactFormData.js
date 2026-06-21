import supabase from "./supabase";

export async function createFormData(formData) {
    if(!formData) return;
    
    const { data, error } = await supabase
        //Querying the appointment table in the supabase
        .from("contactForm")
        .insert([formData]); //Insert the data received from the input fields

    if (error) {
        console.error(error);
        throw new Error("Data could not be sent: Failed!");
    }

    //Return data
    return data || [];
}
