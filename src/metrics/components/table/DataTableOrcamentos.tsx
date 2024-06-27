import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { FilterMatchMode, FilterOperator, FilterService } from 'primereact/api';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Tooltip } from 'primereact/tooltip';
import { Toolbar } from 'primereact/toolbar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface DataTableOrcamentosProps {
    data: Wed.Orcamento[];
    loading: boolean;
}

// The rule argument should be a string in the format "custom_[field]".
FilterService.register('custom_dataOrcamento', (value, filters) => {
    const [from, to] = filters ?? [null, null];
    if (from === null && to === null) return true;
    if (from !== null && to === null) return from <= value;
    if (from === null && to !== null) return value <= to;
    return from <= value && value <= to;
});

export default function DataTableOrcamentos(props: Readonly<DataTableOrcamentosProps>) {
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
        // @ts-ignore
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        idProfissional: {
            operator: FilterOperator.AND,
            constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
        },
        dataOrcamento: {
            value: null,
            matchMode: FilterMatchMode.CUSTOM
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
    const dt = useRef(null);
    const exportCSV = (selectionOnly: boolean) => {
        // @ts-ignore
        dt.current.exportCSV({ selectionOnly });
    };
    const cols = [
        { field: 'idProfissional', header: 'ID Profissional' },
        { field: 'dataOrcamento', header: 'Data da Solicitação' },
        { field: 'nomeEmpresa', header: 'Nome da Empresa' },
        { field: 'nomeCliente', header: 'Nome do Cliente' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                // @ts-ignore
                const doc = new jsPDF.default(0, 0);

                // @ts-ignore
                doc.autoTable(exportColumns, props.data);
                doc.save('orcamentos.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(props.data);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'orcamentos');
        });
    };

    const saveAsExcelFile = (buffer: Buffer, fileName: string) => {
        import('file-saver').then((module) => {
            if (module?.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };
    const onGlobalFilterChange = (e: any) => {
        const value = e.target.value;
        // @ts-ignore
        let _filters: any = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const leftToolbar = (
        <div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
    );

    const dateFilterTemplate = (options: any) => {
        return <Calendar value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} dateFormat="dd/mm/yy" placeholder="dd/mm/yyyy" mask="99/99/9999" />;
    };

    const dateBodyTemplate = (rowData: Wed.Orcamento) => {
        // @ts-ignore
        return formatDate(rowData.dataOrcamento);
    };

    const initFilters = () => {
        setFilters({
            // @ts-ignore
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            idProfissional: {
                operator: FilterOperator.AND,
                constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }]
            },
            dataOrcamento: {
                value: null,
                matchMode: FilterMatchMode.CUSTOM
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
            <h5 className="m-0">Gerenciador de Orçamentos</h5>
            <Button type="button" icon="pi pi-filter-slash" label="Limpar" outlined onClick={clearFilter} />
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Buscar..." />
            </span>
        </div>
    );

    const dataOrcamentoFilterTemplate = (options: any) => {
        const [from, to] = options.value ?? [null, null];

        return (
            <div className="flex gap-1">
                <Calendar value={from} onChange={(e) => options.filterApplyCallback([e.value, to], options.index)} className="w-full" placeholder="De" dateFormat="mm/dd/yy" mask="99/99/9999" />
                <Calendar value={to} onChange={(e) => options.filterApplyCallback([from, e.value], options.index)} className="w-full" placeholder="Para" dateFormat="mm/dd/yy" mask="99/99/9999" />
            </div>
        );
    };

    return (
        <div>
            <Tooltip target=".export-buttons>button" position="bottom" />
            <Toolbar className="mb-4" start={leftToolbar}></Toolbar>
            <DataTable
                ref={dt}
                stripedRows
                filterDisplay="row"
                removableSort
                value={props.data}
                header={header}
                dataKey={'idProfissional'}
                sortField="dataOrcamento"
                resizableColumns
                className="datatable-responsive"
                tableStyle={{ minWidth: '50rem' }}
                loading={props.loading}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                rowsPerPageOptions={[25, 50, 100, 200]}
                globalFilterFields={['dataOrcamento', 'nomeEmpresa', 'nomeCliente']}
                //@ts-ignore
                filters={filters}
                emptyMessage="Não foram encontrados Orçamentos"
                currentPageReportTemplate="Mostrando {first} até {last} de {totalRecords} profissionals cadastrados"
                rows={50}
                paginator
            >
                <Column field="idProfissional" header="ID Profissional" style={{ width: '5%' }}></Column>
                <Column filter body={dateBodyTemplate} filterElement={dataOrcamentoFilterTemplate} filterField="dataOrcamento" dataType="date" header="Data da Solicitação" style={{ width: '20%' }}></Column>
                <Column field="nomeEmpresa" header="Empresa" sortable filter filterPlaceholder="Busque pela empresa" style={{ width: '30%' }}></Column>
                <Column field="nomeCliente" header="Nome do Cliente" filter filterPlaceholder="Busque pelo Cliente" sortable style={{ width: '30%' }}></Column>
            </DataTable>
        </div>
    );
}
