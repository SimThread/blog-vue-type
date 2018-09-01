import { _get } from '@/service';

export const getApps = (data: any) => {
  const req = {
    url: 'mobile/getApps',
    data,
  };
  return _get(req);
};
