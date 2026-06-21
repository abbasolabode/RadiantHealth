import supabase from "./supabase";

export async function getDoctorsData() {
  const { data, error } = await supabase
    .from("doctors")
    .select("*");

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  };

  return data || [];
}


export async function getDoctorDataById(id) {
  if (!id) throw new Error("Doctor ID is missing");

  const { data, error } = await supabase
    .from("doctors")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data
}



