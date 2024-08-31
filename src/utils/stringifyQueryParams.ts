export default function stringifyQueryParams(filters: any) {
  let queryParams = `?`;
  if (filters) {
    for (const key in filters) queryParams += `${encodeURIComponent(key)}=${filters[key]}&`;

    queryParams = queryParams.slice(0, -1);

    return queryParams;
  } else {
    return '';
  }
}