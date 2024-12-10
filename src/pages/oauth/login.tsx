import React, { useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useSearchParams, history, Helmet, useModel } from '@umijs/max';
import { Footer } from '@/components';
import { code2Token } from '@/services/main/oauth';
import Settings from '../../../config/defaultSettings';
import { Spin } from 'antd';

const Login: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { setInitialState } = useModel('@@initialState');

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      code2Token(code).then((res) => {
        console.log(res);
        if (res.code === 0 && res.data.access_token) {
          localStorage.setItem('token', res.data.access_token);
          flushSync(() => {
            setInitialState((s) => ({
              ...s,
              currentUser: res.data,
            }));
          });
          history.push('/');
        }
      });
    }
  }, [searchParams]);
  
  return (
    <div
      className="flex flex-col h-screen overflow-auto bg-[url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')] bg-cover"
    >
      <Helmet>
        <title>
          登录页 - {Settings.title}
        </title>
      </Helmet>
      <div className="flex-1 flex justify-center items-center">
        <Spin size='large' />
      </div>
      <Footer />
    </div>
  )
};

export default Login;