import http from '../interceptor';

export const registerRequest = (data) => http.post('/sighup', data);
export const loginRequest = (data) => http.post('/sighin', data);
export const getUser = () => http.get('/authUser');
export const updateContest = data => http.put(`/contests/${data.contestId}`, data);
export const setNewOffer = data => http.post('setNewOffer', data);
export const setOfferStatus = data => http.post('setOfferStatus', data);
export const downloadContestFile = (data) => http.get('downloadFile/' + data.fileName);
export const payMent = (data) => http.post('/contests/payment', data.formData);
export const changeMark = (data) => http.post('changeMark', data);
export const getPreviewChat = () => http.post('getPreview');
export const getDialog = (data) => http.post('getChat', data);
export const dataForContest = (data) => http.post('/contests/data', data);
export const cashOut = (data) => http.post('cashout', data);
export const updateUser = (data) => http.put(`users/${data.id}`, data);
export const newMessage = (data) => http.post('newMessage', data);
export const changeChatFavorite = (data) => http.post('favorite', data);
export const changeChatBlock = (data) => http.post('blackList', data);
export const getCatalogList = (data) => http.post('getCatalogs', data);
export const addChatToCatalog = (data) => http.post('addNewChatToCatalog', data);
export const createCatalog = (data) => http.post('createCatalog', data);
export const deleteCatalog = (data) => http.post('deleteCatalog', data);
export const removeChatFromCatalog = (data) => http.post('removeChatFromCatalog', data);
export const changeCatalogName = (data) => http.post('updateNameCatalog', data);
export const getCustomersContests = (data) => {
    return http.post(`/customer/contests`, {limit: data.limit, offset: data.offset}, {
        headers: {
            status: data.contestStatus
        }
    });
};

export const getActiveContests = ({offset, limit, typeIndex, contestId, industry, awardSort, ownEntries}) => {
    return http.get(`/contests?offset=${offset}&limit=${limit}&typeIndex=${typeIndex}&contestId=${contestId}&industry=${industry}&awardSort=${awardSort}&ownEntries=${ownEntries}`)
};

export const getContestById = ({contestId}) => {
    return http.get(`contests/${contestId}`, {
        headers: {
            contestId
        }
    });
};









