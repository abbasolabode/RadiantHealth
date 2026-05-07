import supabase from "./supabase";

export async function getBlogData() {

    const { data, error } = await supabase
        .from('blog')
        .select('*')
    if (error) {
        console.error(error.message || "There's an error");
        throw new Error(error.message)
    }

    return data || null;
}



export async function getBlogDetailsById(id) {
    console.log(id);
    if (!id) throw new Error("Doctor ID is missing");
    const { data = {}, error } = await supabase
        .from("blog")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }
    
    console.log(data);
    return data ?? null;
}