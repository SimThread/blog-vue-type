import { _get, _put } from '@/service';

export const getIndexImage = (data: any) => {
  const req = {
    url: 'article/getIndexImage',
    data,
  };
  return _get(req);
};

export const getFrontArticleList = (data: any) => {
  const req = {
    url: 'article/getFrontArticleList',
    data,
  };
  return _get(req);
};

export const getFrontArticleCount = (data: any) => {
  const req = {
    url: 'article/getFrontArticleCount',
    data,
  };
  return _get(req);
};

export const getFrontArticle = (data: any) => {
  const req = {
    url: `article/${data.id}/getFrontArticle`,
  };
  return _get(req);
};

export const toggleLike = (data: any) => {
  const req = {
    url: 'article/toggleLike',
    data,
  };
  return _put(req);
};

export const getPrenext = (data: any) => {
  const req = {
    url: `article/${data.id}/getPrenext`,
    data: data.options,
  };
  return _get(req);
};
