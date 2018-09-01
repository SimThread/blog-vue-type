import { _get, _put } from '@/service';

export const getSnsLogins = (data: any) => {
  const req = {
    url: 'users/snsLogins',
    data,
  };
  return _get(req);
};

export const getMe = (data: any) => {
  const req = {
    url: 'users/me',
    data,
  };
  return _get(req);
};

export const mdUser = (data: any) => {
  const req = {
    url: 'users/mdUser',
    data,
  };
  return _put(req);
};
