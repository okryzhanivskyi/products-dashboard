const defaultSSRConfig: RequestInit = {
  cache: 'no-store',
};

export const apiGet = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`${process.env.API_URL}${endpoint}`, defaultSSRConfig)
  return response.json()
};
