const CAT_ENDPOINT_IMAGE_URL = (words) => {
  return `https://cataas.com/cat/says/${words}?json=true`
}
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

const imageUrlAdapter = (path) => {
  return CAT_PREFIX_IMAGE_URL + path
}

// export const getRandomImage = (fact) => {
//   const firstThreeWords = fact.split(' ', 3).join(' ')

//   return fetch(CAT_ENDPOINT_IMAGE_URL(firstThreeWords))
//     .then((response) => response.json())
//     .then((data) => data.url)
// }

export const getRandomImage = async (fact) => {
  const firstThreeWords = fact.split(' ', 3).join(' ')

  const response = await fetch(CAT_ENDPOINT_IMAGE_URL(firstThreeWords))
  const { url } = await response.json()
  const adaptedUrl = imageUrlAdapter(url)
  return adaptedUrl
}

// const firstWord = fact.split(' ')[0]
// const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
