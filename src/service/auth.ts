import { _post } from '@/service';

export const localLogin = (data: any) => {
  const req = {
    url: 'auth/local',
    data,
  };
  return _post(req);
};
