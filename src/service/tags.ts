import { _get } from '@/service';

// 获取标签
export const getTagList = (data: any) => {
  const req = {
    url: 'tags/getFrontTagList',
    data,
  };
  return _get(req);
};
