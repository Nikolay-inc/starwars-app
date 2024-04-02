import axios from 'axios';
import PersonProfile from '../../../components/PersonProfile';
import { baseFilmsUrl, baseUrl } from '../../../const/index';

const getPersonData = async (personId) => {
  try {
    const response = await axios.get(`${baseUrl}/${personId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const getFilmsData = async () => {
    try {
      const response = await axios.get(baseFilmsUrl);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

const HeroPage = async ({ params }) => {
  const person = await getPersonData(params.heroId);
  const films = await getFilmsData();

  if (!person || !films) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <PersonProfile person={person} films={films} />
    </main>
  );
}

export default HeroPage;