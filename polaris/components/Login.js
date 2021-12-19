import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login(){

  const { authenticate } = useMoralis();

  return(
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-8">
        {/* logo */}
        <Image
          className="animate-appear1"
          src="/images/logo2.png"
          height={100}
          width={600}
        />
        <h4 className="font-Miedinger uppercase text-xl tracking-widest">Your gateway to</h4>
        {/* login button */}
        <h2 className="font-Miedinger drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)] lg:drop-shadow-[6px_6px_0px_rgba(0,0,0,0.6)] text-4xl md:text-6xl lg:text-9xl">METAVERSE-2022</h2>
        <button onClick={authenticate} className="bg-blue-500 p-5 uppercase font-Miedinger animate-pulse">Login to the MetaVerse</button>
      </div>

      <div className="w-full h-screen">
        {/* login form */}
        <Image
          src="/images/cyberBg.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
