import axios from "axios";

export const revokeGoogleToken = async (token) => {
  const url = `https://accounts.google.com/o/oauth2/revoke?token=${token}`;
  try {
    await axios.post(url);
  } catch (error) {
    console.error("Error revoking Google token:", error);
  }
};
