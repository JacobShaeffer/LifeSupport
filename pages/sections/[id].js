import Link from 'next/link';
import { getAllSectionIds, getSectionData } from '../../lib/sections';

export default function Section({ sectionData }) {
  return (
    <>
      <h1>{sectionData.title}</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}

export async function getServerSidePaths(){
	const paths = getAllSectionIds();
	return {
		paths,
		fallback: false,
	};
}

export async function getServerSideProps({ params }){
	const sectionData = getSectionData(params.id);
	return {
		props: {
			sectionData,
		},
	};
}