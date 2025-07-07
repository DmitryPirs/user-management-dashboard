export const fetchData = async url => {
  url = 'https://dummyjson.com/posts'
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Network response was not ok')
  }
  return res.json()
}

export const createPost = async ({ request }) => {
  const formData = await request.formData()
  const title = formData.get('title')

  const response = await fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      userId: 5,
    }),
  })
  if (!response.ok) {
    throw new Error('Filed create post')
  }
  const data = await response.json()
  return data
}
