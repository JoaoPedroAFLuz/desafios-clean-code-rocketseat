// Nomenclatura de variáveis
const fetch = require('node-fetch')

const categories = [
  {
    title: 'New',
    followers: 0,
  },
  {
    title: 'User',
    followers: 5,
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getUserCategory(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`,
    })
  }

  const gitHubApiResponse = await fetch(
    `https://api.github.com/users/${username}`
  )

  if (gitHubApiResponse.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`,
    })
  }

  const userData = await gitHubApiResponse.json()

  const orderedCategories = categories.sort(
    (categoryA, categoryB) => categoryB.followers - categoryA.followers
  )

  const category = orderedCategories.find(
    (category) => userData.followers >= category.followers
  )

  const userInfo = {
    github: username,
    category: category.title,
  }

  console.log('User Info:', userInfo)

  return userInfo
}

getUserCategory(
  {
    query: {
      username: 'JoaoPedroAFLuz',
    },
  },
  {}
)
