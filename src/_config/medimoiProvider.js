import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

/**
 * HttpClient (fetch)
 * Tip: fetchUtils.fetchJson() is just a shortcut for fetch().then(r => r.json()), plus a control of the HTTP response code to throw an HTTPError in case of 4xx or 5xx response.
 */
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // It will be used later by the auth system
    // const token = localStorage.getItem('token');
    // options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

/**
 * @example
 *
 * getList          => GET http://my.api.url/posts?_sort=title&_order=ASC&_start=0&_end=24
 * getOne           => GET http://my.api.url/posts/123
 * getManyReference => GET http://my.api.url/posts?author_id=345
 * getMany        => GET http://my.api.url/posts?id=123&id=456&id=789
 * create           => POST http://my.api.url/posts/123
 * update           => PUT http://my.api.url/posts/123
 * updateMany(Not configured)       => PUT http://my.api.url/posts/123, PUT http://my.api.url/posts/456, PUT http://my.api.url/posts/789
 * delete           => DELETE http://my.api.url/posts/123
 */
export default {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, perPage]),
            filter: JSON.stringify(params.filter),
        };

        const url = `${apiUrl}/${resource}/all?${stringify(query)}`;

        return httpClient(url)
            .then(({ headers, json }) => {
                if (!headers.has('content-range')) {
                throw new Error(
                    'The content-range header is missing in the HTTP Response.'
                );
            }
            return {
                data:json,
                total: parseInt(headers.get('content-range'), 10)
            }
        });
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filterMany: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}/many?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, perPage]),
            filter: JSON.stringify(params.filter)
        };

        // const query = {
        //     sort: JSON.stringify([field, order]),
        //     range: JSON.stringify([(page - 1) * perPage, perPage]),
        //     filter: JSON.stringify({
        //         ...params.filter,
        //         [params.target]: params.id,
        //     }),
        // };

        const url = `${apiUrl}/${resource}/all?${stringify(query)}`;

        return httpClient(url)
            .then(({ headers, json }) => {
                if (!headers.has('content-range')) {
                    throw new Error(
                        'The content-range header is missing in the HTTP Response.'
                    );
                }
                return {
                    data:json,
                    total: parseInt(headers.get('content-range'), 10)
                }
            });

    },

    update: (resource, params) => {
        // Check if files entry exists
        let isNotFiles = params.data.files !== undefined;//true or false

        // Without files
        if(!isNotFiles) {
            return httpClient(`${apiUrl}/${resource}/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify(params.data),
            }).then(({json}) => ({data: json}))
        }
        console.log("Il y a des fichiers")
        // With files
        const paramEntries = Object.entries(params.data);
        let formData = new FormData();
        paramEntries.forEach((value => {
            if(value[0] !== 'files') {
                formData.append(value[0], value[1]);
            } else {
                value[1].forEach((dataFile, key) => {
                    formData.append('files', dataFile.rawFile);
                })
            }
        }))
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: formData,
        }).then(({json}) => ({data: json}))
    },

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) => {
        // Check if files entry exists
        let isNotFiles = params.data.files !== undefined;//true or false

        // Without files
        if(!isNotFiles) {
            return httpClient(`${apiUrl}/${resource}/new`, {
                method: 'POST',
                body: JSON.stringify(params.data),
            }).then(({json}) => ({
                data: {...params.data, id: json.id},
            }))
        }
        // With files
        const paramEntries = Object.entries(params.data);
        let formData = new FormData();
        paramEntries.forEach((value => {
            if(value[0] !== 'files') {
                formData.append(value[0], value[1]);
            } else {
                value[1].forEach((dataFile, key) => {
                    formData.append('files', dataFile.rawFile);
                })
            }
        }))
        return httpClient(`${apiUrl}/${resource}/new`, {
            method: 'POST',
            body: formData,
        }).then(({json}) => ({
            data: {...params.data, id: json.id},
        }))
    },

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },
};