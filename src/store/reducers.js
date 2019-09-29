import {IS_SHOW_MAP, IS_SHOW_CALC} from './actiontype'


const initalState = {
    isShowMap: false, // 图是否显示地
    isShowCalc: true // 是否显示计算器
}

export default function(prevState = initalState, action) {
    switch (action.type) {
        case IS_SHOW_MAP:
            const mapObj = JSON.parse(JSON.stringify(prevState))
            mapObj.isShowMap = action.isShowMap

            return mapObj

        case IS_SHOW_CALC:
            const calcObj = JSON.parse(JSON.stringify(prevState))

            calcObj.isShowCalc = action.isShowCalc

            return calcObj

        default:
            return prevState
    }
}