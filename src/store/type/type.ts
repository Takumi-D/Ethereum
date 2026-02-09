export interface FetchData {
    asset_platform_id: string;
    contract_address: string;
    id: string;
    name: string;
    symbol: string;
}

export interface State {
    data: FetchData[];
    loading: boolean;
    error: null | string;
}