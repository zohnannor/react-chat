export const ENDPOINT =
    process.env.NODE_ENV === 'production'
        ? 'https://zohnannor-react-chat.herokuapp.com/'
        : 'http://localhost:25565/';
