import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from "react-moralis";

export default function Home() {

  const { isAuthenticated, logout } = useMoralis();

  if(!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Polaris | Web3.0 real-time chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the MetaVerse</h1>
      <button onClick={logout}>Log Out</button>
    </div>
  )
}
