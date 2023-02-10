import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name, test, setTest } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <div
          onClick={() => {
            setTest('12345678');
          }}
        >
          {test}
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;
