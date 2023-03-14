import classNames from 'classnames';
import { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';

import { MainFeature } from '../features/main-feature';
import { IUserType } from '../types/api-types';

const Home: NextPage = () => {
  const { user, loading } = useSelector(
    (state: { user: { loading: boolean; user: IUserType } }) => state.user,
  );

  const mainClassNames = classNames('flex relative justify-center pt-16');
  return (
    <>
      <Head>
        <title>PROJECT SHOWROOM - EMRE MUTLU & ERCAN AKALAR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainClassNames}>
        {!user && !loading ? null : <MainFeature user={user} />}
      </main>
    </>
  );
};

export default Home;