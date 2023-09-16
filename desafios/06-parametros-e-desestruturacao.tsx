function updateUserRoute(body, params) {
  const { id } = params
  const { name, email, password } = body

  updateUserController({ body: { name, email, password }, params: { id } })
}

function updateUserController({
  body: { name, email, password },
  params: { id }
}) {
  userRepository.update({ id, name, email, password })
}

const userRepository = {
  update: ({ id, name, email, password }) => {}
}
