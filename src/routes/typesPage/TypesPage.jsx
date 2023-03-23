import { useParams } from 'react-router-dom';

import './types-page.scss';

const TypesPage = () => {
  const { typeName } = useParams();

  return <div>TypesPage</div>;
};

export default TypesPage;
