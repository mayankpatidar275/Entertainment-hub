// pages/api/jokes.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest, res: NextResponse){
  try {
    // Make a request to the external joke API
    const response = await axios.get('https://v2.jokeapi.dev/joke/Programming');
    const data = response.data;
    // Check if the joke type is "twopart" or "single"
    let jokeText: string;
    if (data.type === 'twopart') {
      jokeText = `${data.setup} ${data.delivery}`;
    } else {
      jokeText = data.joke;
    }
    return NextResponse.json({
      jokeText: jokeText   
  })
    // res.status(200).json({ joke: jokeText });
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 400});
  }
};

