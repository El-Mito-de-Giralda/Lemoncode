import React from 'react';
import { getDetail } from './api/detail.api';
import { updateCharacterQuotes } from 'pods/character/api';
import { useParams } from 'react-router-dom';
import { DetailPage } from './character-detail';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';


export const DetailContainer: React.FunctionComponent = (props) => {
  let { id } = useParams();
  const [characterDetail, setCharacterDetail] = React.useState(null);
  const [quoteInfo, setQuoteInfo] = React.useState([]);
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(linkRoutes.editQuotes(id));
  };

 

  React.useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const character = await getDetail(id);
        setCharacterDetail(character);
        setQuoteInfo(character.bestquotes || []);
      } catch (error) {
        console.log('Error fetching character detail:', error);
      }
    };

    if (id) {
      fetchCharacterDetail();
    }
  }, [id]);

  return (
    <DetailPage 
      character={characterDetail}  
      onEdit={handleEdit} 
      quotes={quoteInfo}
    />
  );
};