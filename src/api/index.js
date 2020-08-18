import ajax from './axios'

// export function reqGetShouldBuyMessage(){
//     return ajax({
//         url:'/topic/v1/find/recManual.json',
//         method:'GET'
//     })
// }

export const reqGetShouldBuyMessage = ()=> ajax.get('/topic/v1/know/navWap.json')
// export const reqGetWaterFallMessage = ()=> ajax.get('/topic/v1/find/recAuto.json')

export function reqGetWaterFallMessage(page=1,size=10){
    return ajax({
        url:'/topic/v1/find/recAuto.json?page='+page+'&size='+size,
        method:'GET',
    })
}