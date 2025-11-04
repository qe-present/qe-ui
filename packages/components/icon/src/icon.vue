<script setup lang="ts">
import {createNamespace} from '@qe-ui/utils/create.ts'

import {iconProps} from "./icon";
import {computed} from "vue";

const bem = createNamespace('icon')
const props = defineProps(iconProps)
// 计算属性
const style = computed(() => {
  const styles: Record<string, string> = {};
  if (props.size) styles.fontSize = typeof props.size === 'number' ? `${props.size}px` : props.size;
  if (props.color) styles.color = props.color;
  return styles;
});
defineOptions({ name: 'QeIcon' })
</script>


<template>
  <i :class="bem.b().toString()" :style="style">
    <slot/>
  </i>
</template>

<style scoped>

</style>