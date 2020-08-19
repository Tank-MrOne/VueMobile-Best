import ajax from './axios'

export const reqGetShouldBuyMessage = ()=> ajax.get('/topic/v1/know/navWap.json')

export function reqGetWaterFallMessage(page=1,size=10){
    return ajax({
        url:'/topic/v1/find/recAuto.json?page='+page+'&size='+size,
        method:'GET',
    })
}

// export const reqGetCategoryList = ()=> ajax.get('/item/cateList.json?categoryId=')
export function reqGetCategoryList(id=''){
    return ajax({
        url:'/item/cateList.json?categoryId='+id,
        method:'GET',
    })
}
// https://m.you.163.com/item/cateList.json?__timestamp=1597795839568&categoryId=109217021

// https://m.you.163.com/xhr/index.json
export function reqGetHomeInfo(){
    return ajax({
        url:'/xhr/index.json',
        method:'GET',
    })
}

// https://m.you.163.com/xhr/search/init.json
export const reqGetSearchMessage = ()=> ajax.get('/xhr/search/init.json')

// https://m.you.163.com/xhr/search/searchAutoComplete.json
export function reqSendSearch(value){
    return ajax({
        url:'/xhr/search/searchAutoComplete.json',
        method:'post',
        params:{
            keywordPrefix : value
        }
    })
}

// https://m.you.163.com/xhr/search/search.json?keyword=蓝牙耳机&sortType=0&descSorted=false&categoryId=0&matchType=0&floorPrice=-1&upperPrice=-1&size=40&itemId=0&stillSearch=false&searchWordSource=7&needPopWindow=true&_stat_search=autoComplete