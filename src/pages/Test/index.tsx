import { useModel } from '@umijs/max';
import { Button } from 'antd';

const TestPage: React.FC = () => {
  const { test, setTest } = useModel('global');
  return (
    <div>
      <Button
        onClick={() => {
          setTest('12345678');
        }}
        size="small"
      >
        点击修改
      </Button>
      <div>{test}</div>
    </div>
  );
};

export default TestPage;
