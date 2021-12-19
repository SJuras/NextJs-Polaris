import Head from 'next/head'
import Login from '../components/Login';
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {

  const { isAuthenticated } = useMoralis();

  if(!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-teal-700 overflow-hidden">
      <Head>
        <title>Polaris | Web3.0 real-time chat app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1>Welcome to the MetaVerse</h1>
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <Header />
          {/* Messages */}
          <Messages />
        </div>
    </div>
  )
}
