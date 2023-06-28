export default (messages = [], action) => {
    switch (action.type) {
case 'CREATE' :
    return [...messages, action?.payload];


default:
    return messages;
    }
};