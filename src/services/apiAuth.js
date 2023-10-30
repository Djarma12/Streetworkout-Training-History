import supabase, { supabaseUrl } from "./supabase";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  console.log(data);
  if (error) throw new Error(error.message);
  return data;
}

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function insertUser({ nickName, birthDate, userid }) {
  const { data, error } = await supabase
    .from("users")
    .insert([{ nickName, birthDate, userid }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function updateUser({ updatedUser, oldAvatar }) {
  const hasAvatarPath = updatedUser.avatar?.startsWith?.(supabaseUrl);

  const avatarName = `${Math.random()}-${updatedUser.avatar.name}`.replaceAll(
    "/",
    ""
  );
  const avatarPath = hasAvatarPath
    ? updatedUser.avatar
    : `${supabaseUrl}/storage/v1/object/public/avatars/${avatarName}`;

  const { data, error } = await supabase
    .from("users")
    .update({ ...updatedUser, avatar: avatarPath })
    .eq("userid", updatedUser.userid)
    .select();

  if (error) throw new Error(error.message);

  // 2. Upload avatar
  if (hasAvatarPath) return data;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(avatarName, updatedUser.avatar);

  if (storageError) throw new Error(storageError);

  // await removeAvatar(oldAvatar.slice(oldAvatar.lastIndexOf("/") + 1));

  return data;
}

/*export async function removeAvatar(avatarName) {
  console.log(avatarName);
  const { error } = await supabase.storage.from("avatars").remove([avatarName]);

  if (error) throw new Error(error.message);

  return null;
}*/

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  return null;
}
