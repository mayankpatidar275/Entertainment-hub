import React from "react";
import Iframe from 'react-iframe';
import Jokes from './../jokes/jokes';

function Activities() { 
  return (
    <div className="p-4 m-8">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Jokes</h2>
        <div className="border border-gray-300 rounded overflow-hidden bg-blue-200">
          <Jokes />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Jump the Obstacles</h2>
        <div className="border border-gray-300 rounded overflow-hidden">
          <Iframe
            url={process.env.NEXT_PUBLIC_URL_TO_GAME_PROJECT!}
            width="100%"
            height="600px"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Play the Drums</h2>
        <div className="border border-gray-300 rounded overflow-hidden">
          <Iframe
            url={process.env.NEXT_PUBLIC_URL_TO_DRUM_PROJECT!}
            width="100%"
            height="600px"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Hit the bubble</h2>
        <div className="border border-gray-300 rounded overflow-hidden">
          <Iframe
            url={process.env.NEXT_PUBLIC_URL_TO_BUBBLE_PROJECT!}
            width="100%"
            height="600px"
          />
        </div>
      </section>
    </div>
  );
}

export default Activities;
