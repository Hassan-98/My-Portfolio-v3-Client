export interface PaginatedData {
  meta: Meta;
}

export interface Meta {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}

export interface ApiGetFilters {
  limit?: number;
  skip?: number;
  page?: number;
}