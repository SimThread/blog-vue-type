import { _get, _post, _delete, _put } from '@/service';

export const getFrontCommentList = (data: any) => {
  const req = {
    url: `comment/${data.id}/getFrontCommentList`,
  };
  return _get(req);
};

export const addNewComment = (data: any) => {
  const req = {
    url: 'comment/addNewComment',
    data,
  };
  return _post(req);
};

export const addNewReply = (data: any) => {
  const req = {
    url: 'comment/addNewReply',
    data,
  };
  return _post(req);
};

export const delComment = (data: any) => {
  const req = {
    url: 'comment/delComment',
    data,
  };
  return _delete(req);
};

export const delReply = (data: any) => {
  const req = {
    url: 'comment/delReply',
    data,
  };
  return _put(req);
};
