export default class AuthService {
  async postUserToken(token) {
    console.log("[DEBUG] Token being sent:", token);
    const response = await axios.get("/usuarios/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}
