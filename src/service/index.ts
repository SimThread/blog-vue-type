import api from '@/utils/api';

// get
export const _get = (req: any) => api({ method: 'get', url: `/${req.url}`, params: req.data });

// post
export const _post = (req: any) => api({ method: 'post', url: `/${req.url}`, data: req.data });

// patch
export const _put = (req: any) => api({ method: 'put', url: `/${req.url}`, data: req.data });

// delete
export const _delete = (req: any) => api({ method: 'delete', url: `/${req.url}`, data: req.data });
