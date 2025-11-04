// 准备组件的属性，类型
import type {PropType} from "vue";
import {ExtractPropTypes} from "vue";

export const iconProps = {
    color:{
        type:String as PropType<string>,
        default:''
    },
    size:{
        type:[String,Number] as PropType<string | number>,
        default:'1em'
    }
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
