async function register(data) {
  const { email, name, avatar } = data

  if (!avatar) return { error: 'avatar is required' }

  if (!name) return { error: 'name is required' }

  const userMail = getUserByEmail(email)

  if (userMail) {
    return { error: 'email already used' }
  }

  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const avatar2 = convertImageToJPG(avatar)

  const user = await createUser({ email, name, avatar: avatar2 })

  return { user }
}
