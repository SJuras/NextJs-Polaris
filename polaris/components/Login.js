import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login(){

  const { authenticate } = useMoralis();

  return(
    <div className="bg-black relative text-white">
      <h1>Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* logo */}
        <Image
          className=""
          src="/images/logo1.png"
          height={200}
          width={400}
        />
        {/* login button */}
        <button onClick={authenticate} className="bg-blue-500 p-5 font-bold animate-pulse">Login to the MetaVerse</button>
      </div>

      <div className="w-full h-screen">
        {/* login form */}
        <Image
          src="/images/backgroundLogin.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
