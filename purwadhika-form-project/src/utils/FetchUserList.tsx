export const fetchUserList = async () => {
  try {
    const response = await fetch("http://localhost:3000/user-data");
    if (!response.ok) {
      throw new Error('Failed to fetch user data.')
    }
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error)
  }
}