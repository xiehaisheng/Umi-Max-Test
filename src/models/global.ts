// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { getResources } from '@/services/demo/UserController';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [test, setTest] = useState<string>('鑫鹏');
  const [resources, setResources] = useState<object>({});

  useEffect(() => {
    const getData = async () => {
      const d = await getResources({});
      console.log(d, 999);
      setResources(d);
    };
    getData();
  }, []);
  return {
    name,
    setName,
    test,
    setTest,
    resources,
  };
};

export default useUser;
