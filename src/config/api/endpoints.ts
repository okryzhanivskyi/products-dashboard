export const PRODUCTS_BASE_URL = '/products';
export const CARTS_BASE_URL = '/carts';
export const USERS_BASE_URL = '/users';
export const COMMENTS_BASE_URL = '/comments';
export const QUOTES_BASE_URL = '/quotes';
export const POSTS_BASE_URL = '/posts';

export default {
  products: {
    all: () => PRODUCTS_BASE_URL,
    byId: (id: number) => `${PRODUCTS_BASE_URL}/${id}`,
    search: (searchString: string) => `${PRODUCTS_BASE_URL}/search?q=${searchString}`,
    categories: () => `${PRODUCTS_BASE_URL}/categories`,
    categoryItems: (category: string) => `${PRODUCTS_BASE_URL}/category/${category}`,
  },
  carts: {
    all: () => CARTS_BASE_URL,
    byId: (id: number) => `${CARTS_BASE_URL}/${id}`,
    userCarts: (userId: number) => `${CARTS_BASE_URL}/user/${userId}`,
  },
  users: {
    all: () => USERS_BASE_URL,
    byId: (id: number) => `${USERS_BASE_URL}/${id}`,
    search: (searchString: string) => `${USERS_BASE_URL}/search?q=${searchString}`,
    carts: (id: number) => `${USERS_BASE_URL}/${id}${CARTS_BASE_URL}`,
  },
  comments: {
    all: () => COMMENTS_BASE_URL,
    byId: (id: number) => `${COMMENTS_BASE_URL}/${id}`,
    postComments: (postId: number) => `${COMMENTS_BASE_URL}/${postId}`
  },
  quotes: {
    all: () => QUOTES_BASE_URL,
    byId: (id: number) => `${QUOTES_BASE_URL}/${id}`,
    random: () => `${QUOTES_BASE_URL}/random`,
  },
  posts: {
    all: () => POSTS_BASE_URL,
    byId: (id: number) => `${POSTS_BASE_URL}/${id}`,
    search: (searchString: string) => `${POSTS_BASE_URL}/search?q=${searchString}`,
    byUserId: (id: number) => `${POSTS_BASE_URL}/user/${id}`,
    comments: (id: number) => `${POSTS_BASE_URL}/${id}${COMMENTS_BASE_URL}`,
  },
};
