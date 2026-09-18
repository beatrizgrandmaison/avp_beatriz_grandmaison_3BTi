export async function getProfile(req, res) {
  return res.status(200).json({
    message: "Perfil acessado com sucesso",
    user: req.user,
  });
}
