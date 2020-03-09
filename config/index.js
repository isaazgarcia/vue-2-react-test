const dev = process.env.NODE_ENV !== 'production';
export const BaseUrl = dev ? 'http://localhost:3000' : 'https://vue-2-react-test.now.sh/';
