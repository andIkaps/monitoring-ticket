<script setup lang="ts">
export interface NavigationProps {
    Name: string
    Icon: string
    Url: string
    Children: NavigationProps[]
}

defineProps<NavigationProps>()
</script>

<template>
    <q-item clickable v-ripple v-if="!Children.length" :to="Url">
        <q-item-section avatar>
            <base-icon :icon-name="Icon" size="18" />
        </q-item-section>
        <q-item-section>{{ Name }}</q-item-section>
    </q-item>

    <q-expansion-item v-else :label="Name" :content-inset-level="0.5">
        <template v-slot:header>
            <q-item-section avatar>
                <base-icon :icon-name="Icon" size="18" />
            </q-item-section>

            <q-item-section> {{ Name }} </q-item-section>
        </template>
        <template v-if="Children.length">
            <navigation
                v-for="menu in Children"
                :key="menu.Name"
                v-bind="menu"
            />
        </template>
    </q-expansion-item>
</template>
