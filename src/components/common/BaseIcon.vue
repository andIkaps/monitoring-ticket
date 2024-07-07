<script setup lang="ts">
import { VsxIcon } from 'vue-iconsax'
interface BaseIconProps {
    iconName: string
    color?: string
    size?: number | any
}

withDefaults(defineProps<BaseIconProps>(), {
    size: 24
})
</script>

<template>
    <VsxIcon :iconName="iconName" :color="color" :size="size" type="linear" />
</template>
