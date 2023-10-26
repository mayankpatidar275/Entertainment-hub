import GetStarted from '../components/getstarted/getstarted';
import Iframe from 'react-iframe';
export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 text-center bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Entertainment Hub</h1>
          <GetStarted/>
      </div>
      {/* <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Jump the Obstacles</h2>
        <div className="border border-gray-300 rounded overflow-hidden">
          <Iframe
            url={process.env.NEXT_PUBLIC_URL_TO_GAME_PROJECT!}
            width="100%"
            height="600px"
          />
        </div>
      </section> */}

    </div>
  );
}