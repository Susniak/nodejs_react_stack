const baseUrl = 'http://localhost:8080';
const getUrl = postfix => `${baseUrl}/${postfix}`;

const urlsConfig = {
    resultsList: getUrl('books')
};

export default urlsConfig
