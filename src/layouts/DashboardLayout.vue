<template>
    <q-layout view="lHh Lpr lFf">
        <q-header
            class="tw-py-1.5 tw-bg-white tw-text-sidebar tw-shadow-lg tw-shadow-black/5"
        >
            <q-toolbar class="tw-px-5 tw-justify-between">
                <base-icon
                    icon-name="HambergerMenu"
                    :size="20"
                    @click="toggleLeftDrawer"
                    class="tw-cursor-pointer"
                />

                <div class="tw-flex tw-items-center tw-gap-3">
                    <section class="tw-relative tw-cursor-pointer">
                        <base-icon
                            icon-name="Notification"
                            :size="20"
                            class="tw-mr-2"
                        />
                        <small
                            class="tw-text-[6px] tw-bg-[#FC5353] tw-text-white tw-rounded-md tw-p-0.5 tw-absolute -tw-top-1 tw-right-1.5"
                        >
                            99+
                        </small>
                        <q-tooltip> 99+ Notifications </q-tooltip>
                    </section>
                    <section class="tw-flex tw-items-center tw-cursor-pointer">
                        <base-icon
                            icon-name="SecurityUser"
                            :size="20"
                            class="tw-mr-2"
                        />
                        <h1 class="tw-font-semibold">Administrator</h1>
                    </section>
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            class="tw-bg-sidebar tw-text-white"
        >
            <q-list>
                <q-item-label header>
                    <h1
                        class="tw-uppercase tw-text-white tw-font-black tw-text-2xl tw-text-center"
                    >
                        monitoring
                    </h1>

                    <q-btn
                        class="tw-w-full !tw-text-sidebar tw-font-semibold tw-rounded-[10px] tw-mt-10 tw-mb-3"
                        color="secondary"
                        label="New Ticket"
                        no-caps
                    />
                </q-item-label>

                <navigation
                    v-for="menu in menus"
                    :key="menu.Name"
                    v-bind="menu"
                />
            </q-list>
        </q-drawer>

        <q-page-container>
            <main class="tw-p-5">
                <router-view />
            </main>
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navigation, { NavigationProps } from 'components/common/Navigation.vue'

defineOptions({
    name: 'MainLayout'
})

const menus: NavigationProps[] = [
    {
        Name: 'Dashboard',
        Icon: 'Element3',
        Url: '/dashboard',
        Children: []
    },
    {
        Name: 'Ticket',
        Icon: 'Ticket',
        Url: '/ticket',
        Children: []
    },
    {
        Name: 'Master Data',
        Icon: 'Layer',
        Url: '/master-data',
        Children: [
            {
                Name: 'Menu',
                Icon: 'HambergerMenu',
                Url: '/master-data/menus',
                Children: []
            }
        ]
    },
    {
        Name: 'Users',
        Icon: 'User',
        Url: '/master-data/users',
        Children: []
    },
    {
        Name: 'Statistics',
        Icon: 'StatusUp',
        Url: '/master-data/users',
        Children: []
    },
    {
        Name: 'Settings',
        Icon: 'Setting2',
        Url: '/master-data/users',
        Children: []
    }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
