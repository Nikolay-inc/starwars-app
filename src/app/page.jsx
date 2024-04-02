import styles from "./page.module.css";
import PeopleList from '../components/PeopleList';
import Pagination from '../components/Pagination';
import { getPeopleData } from '../helpers/fetchPeople';
import { baseUrl } from '../const/index';

const Home = async ({ searchParams }) => {
  // get people data by pages
  const { results: data, next, previous } = await getPeopleData(baseUrl, searchParams?.page);

  return (
    <main className={styles.main}>
      <h1 className={styles.listHeader}>Heroes</h1>
      <PeopleList 
				data={data}  
			/>
      <Pagination 
				nextPage={next} 
				previousPage={previous} 
			/>
    </main>
  );
}

export default Home;
