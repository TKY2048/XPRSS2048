export const signUpController = (req, res) => {
  const {body} = req;

  console.log(body);

  res.send({
    ok: true,
  });
};
