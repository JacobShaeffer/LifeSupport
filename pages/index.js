import Link from 'next/link'
import { getAllSectionData } from '../lib/sections'
import Layout from '../components/layout'
import clientPromise from '../lib/mongodb'

export default function Home({ sections, isConnected }) {
  return (
	<Layout>
		<h1 className="title">
			Life <span>Support</span>
		</h1>

		<p className="description">
			Mission critical information at your fingertips.
			{isConnected ? (<span>Connected</span>) : (<span>ERROR</span>)}
		</p>

		<div className="grid">

			{sections.map((section) =>  {
			return (
				<div className='card' key={section.title}>
				<h3>
					<Link href={"/sections/" + section.id}>
					<a>{section.title} &rarr;</a>
					</Link>
				</h3>
				</div>
			)
			})}

		</div>


      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        span {
          color: inherit;
          text-decoration: none;
        }

        .title span {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
	</Layout>
  )
}

export async function getServerSideProps(){
  const sections = getAllSectionData();
  var isConnected = false;

  try{
	  const {db} = await clientPromise;
	  isConnected = true;
  } catch(e){
	console.error(e);
  }

  return {
    props : {sections, isConnected}
  };
}
