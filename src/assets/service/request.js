import { request } from './intercept'

// 轮播图
function getBanner() {
    return request({
        url: '/banner?type=0'
    })
}

function getHotSinger() {
    return request({
        url: '/top/artists?limit=9'
    })
}

function getPlayList() {
    return request({
        url: '/top/playlist/highquality?limit=10'
    })
}
function getMv(){
    return request({
        url: '/personalized/mv'
    })
}

export {
    getBanner,
    getHotSinger,
    getPlayList,
    getMv
}
