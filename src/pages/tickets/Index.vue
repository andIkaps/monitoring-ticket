<script setup lang="ts">
import { QTableProps } from 'quasar'
import { reactive } from 'vue'

const tableColumns: QTableProps['columns'] = [
    {
        name: 'TicketNo',
        label: 'No Ticket',
        field: (row: any) => row.TicketNo || '-',
        align: 'left'
    },
    {
        name: 'Tanggal',
        label: 'Tanggal',
        field: (row: any) => row.Tanggal || '-',
        align: 'left'
    },
    {
        name: 'Outlet',
        label: 'Outlet',
        field: (row: any) => row.Outlet || '-',
        align: 'left'
    },
    {
        name: 'Problem',
        label: 'Problem',
        field: (row: any) => row.Problem || '-',
        align: 'left'
    },
    {
        name: 'IP',
        label: 'Provider',
        field: (row: any) => row.Provider || '-',
        align: 'left'
    },
    {
        name: 'Status',
        label: 'Status',
        field: (row: any) => row.Status || '-',
        align: 'left'
    }
]
</script>

<template>
    <section>
        <div>
            <h1 class="tw-text-2xl tw-font-semibold">Tiket Baru</h1>
            <p class="tw-text-sm tw-text-gray-500">
                Daftar semua tiket on process.
            </p>
        </div>

        <q-card flat class="tw-mt-5">
            <q-card-section>
                <q-table
                    flat
                    :columns="tableColumns"
                    :rows="[]"
                    row-key="name"
                />
            </q-card-section>
        </q-card>
    </section>
</template>
