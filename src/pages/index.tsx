import Head from 'next/head'
import { Line } from '../components/Line/Line';
import { Main } from '../components/main/Main';
import { v4 as uuidv4 } from 'uuid';
import { getLyricsObject } from '../utils/utils';

export default function Home() {

  const lyrics = `--10
                  I see the moon
                  I see the moon
                  I see the moon
                  Oh, when you're lookin' at the sun
                  --4
                  Not a fool
                  I'm not a fool
                  Not a fool
                  No, you are not foolin' anyone
                  --4
                  Oh, but when you're gone
                  When you're gone
                  When you're gone
                  Oh baby, all the lights go out
                  --4
                  Thinkin' oh that, baby, I was wrong
                  I was wrong
                  I was wrong
                  Come back to me, baby
                  We can work this out
                  --4
                  Oh baby, come on, let me get to know ya
                  Just another chance, so that I can show
                  That I won't let you down, and run
                  No, I won't let you down, and run
                  'Cause, I could be the one
                  --3.5
                  I could be the one
                  --4
                  I could be the one
                  --4
                  I could be the one
                  --4
                  I see in blue
                  I see in blue
                  I see in blue
                  Oh, when you see everythin' in red
                  --4
                  And there's nothing that I wouldn't do for you
                  Do for you
                  Do for you
                  Oh, 'cause you got inside my head
                  --4
                  Oh, but when you're gone
                  When you're gone
                  When you're gone
                  Oh baby, all the lights go out
                  --3.5
                  Thinkin' oh that, baby, I was wrong
                  I was wrong
                  I was wrong
                  Come back to me, baby
                  We can work this out
                  --2.8
                  Oh baby, come on, let me get to know ya
                  Just another chance, so that I can show
                  That I won't let you down, and run
                  --0.5
                  No, I won't let you down, and run
                  'Cause I could be the one
                  --4
                  I could be the one
                  --4
                  I could be the one
                  Be the one, be the one, be the one,
                  be the one, be the one, be the one
                  (I could be the one)
                  Be the one, be the one, be the one,
                  be the one, be the one, be the one
                  (I could be the one)
                  Be the one, be the one, be the one,
                  be the one, be the one, be the one
                  (I could be the one)
                  Be the one, be the one, be the one, be the one
                  (Will you be mine?)
                  Oh baby, come on, let me get to know ya
                  Just another chance, so that I can show
                  That I won't let you down, and run
                  No, I won't let you down, and run
                  'Cause I could be the one
                  --4
                  I could be the one
                  --4
                  I could be the one`;


  const lyricsLine = getLyricsObject(lyrics);

  return (
    <>
      <div>
        <Head>
          <title>Lyrics Action</title>
          <meta name="description" content="A website to render song's lyrics" />
          <link rel="icon" href="/ico.png" />
        </Head>
        <Main>
          {lyricsLine.map((line) => <Line>
            {line.map(word => <p id={uuidv4()} style={{ animation: `${word.animation} ${word.duration} ${word.delay} cubic-bezier(0, 0.66, 1, 0.34)` }}>{word.word}</p>)}
          </Line>)}
        </Main>
        <footer>
        </footer>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}
