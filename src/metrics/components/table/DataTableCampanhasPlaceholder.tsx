import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DataTableCampanhasPlaceholder() {
    const campanhas = Array.from({ length: 10 });

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>;
    };

    // @ts-ignore
    return (
        <div>
            <div className="card">
                {/*// @ts-ignore*/}
                <DataTable value={campanhas} className="p-datatable-striped">
                    <Column field="" header="Empresa" style={{ width: '20%' }} body={bodyTemplate}></Column>
                    <Column field="" header="Assinatura" style={{ width: '20%' }} body={bodyTemplate}></Column>
                    <Column field="" header="Email" style={{ width: '20%' }} body={bodyTemplate}></Column>
                    <Column field="" header="Contato" style={{ width: '20%' }} body={bodyTemplate}></Column>
                    <Column field="" header="Cidade" style={{ width: '20%' }} body={bodyTemplate}></Column>
                    <Column field="" header="Estado" style={{ width: '20%' }} body={bodyTemplate}></Column>
                    <Column field="" header="Visivel no Mtkp" style={{ width: '20%' }} body={bodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
}
