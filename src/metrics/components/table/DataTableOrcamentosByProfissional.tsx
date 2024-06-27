import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Calendar } from 'primereact/calendar';
import moment from 'moment';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

interface DataTableOrcamentosByProfissionalProps {
    data: Wed.Orcamento[];
    loading: boolean;
}

export default function DataTableOrcamentosByProfissional(props: Readonly<DataTableOrcamentosByProfissionalProps>) {
    const [expandedRows, setExpandedRows] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        idProfissional: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
        },
        dataOrcamento: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }]
        },
        nomeEmpresa: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
        },
        nomeCliente: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
        }
    });

    const onGlobalFilterChange = (e: any) => {
        const value = e.target.value;
        let _filters: any = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };
    const calculateCustomerTotal = (name: string) => {
        let total = 0;

        if (props.data) {
            for (let customer of props.data) {
                if (customer.nomeEmpresa === name) {
                    total++;
                }
            }
        }

        return total;
    };

    const headerTemplate = (orcamento: Wed.Orcamento) => {
        return <span className="vertical-align-middle ml-2 font-bold line-height-3">{orcamento.nomeEmpresa}</span>;
    };
    const footerTemplate = (orcamento: Wed.Orcamento) => {
        return (
            <td colSpan={5}>
                <div className="flex justify-content-end font-bold w-full">Total de Orçamentos: {calculateCustomerTotal(orcamento.nomeEmpresa)}</div>
            </td>
        );
    };

    const dateFilterTemplate = (options: any) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" mask="99/99/9999" />;
    };
    const formatDate = (value: string) => {
        const dateMomentObject = moment(value, 'DD/MM/YYYY').toDate();
        return dateMomentObject.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const dateBodyTemplate = (rowData: Wed.Orcamento) => {
        // @ts-ignore
        return formatDate(rowData.dataOrcamento);
    };

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            idProfissional: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
            },
            dataOrcamento: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.BETWEEN }]
            },
            nomeEmpresa: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
            },
            nomeCliente: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
            }
        });
        setGlobalFilterValue('');
    };

    const clearFilter = () => {
        initFilters();
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Gerenciador de Orçamentos Por Profissional</h5>
            <Button type="button" icon="pi pi-filter-slash" label="Limpar" outlined onClick={clearFilter} />
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar..." />
            </span>
        </div>
    );
    return (
        <DataTable
            value={props.data}
            header={header}
            rowGroupMode="subheader"
            groupRowsBy="idProfissional"
            sortMode="single"
            sortField="nomeEmpresa"
            sortOrder={1}
            expandableRowGroups
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data as any)}
            rowGroupHeaderTemplate={headerTemplate}
            rowGroupFooterTemplate={footerTemplate}
            rows={100}
            paginator
            rowsPerPageOptions={[100, 200, 300]}
            globalFilterFields={['idProfissional', 'dataOrcamento', 'nomeEmpresa', 'nomeCliente']}
            scrollable
            loading={props.loading}
            filters={filters}
            emptyMessage="Não foram encontrados Orçamentos"
            currentPageReportTemplate="Mostrando {first} até {last} de {totalRecords} profissionals cadastrados"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        >
            <Column field="idProfissional" header="ID Profissional" sortable filter filterPlaceholder="Busque pelo id" style={{ width: '5%' }}></Column>
            <Column filter body={dateBodyTemplate} filterElement={dateFilterTemplate} filterField="dataOrcamento" dataType="date" header="Data da Solicitação" sortable style={{ width: '10%' }}></Column>
            <Column field="nomeEmpresa" header="Empresa" sortable style={{ width: '30%' }}></Column>
            <Column field="nomeCliente" header="Nome do Cliente" sortable style={{ width: '30%' }}></Column>
        </DataTable>
    );
}
