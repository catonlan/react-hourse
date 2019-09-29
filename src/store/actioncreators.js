
import {IS_SHOW_MAP, IS_SHOW_CALC} from './actiontype'

export  function mapAction(isShowMap) {
        return {
            type: IS_SHOW_MAP,
            isShowMap: isShowMap
        }
    }

export   function calcAction(isShowCalc) {
        return {
            type: IS_SHOW_CALC,
            isShowCalc: isShowCalc
        }
    }