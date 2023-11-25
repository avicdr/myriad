import ReactWordcloud from "react-wordcloud";
import { getDashboardCARDAction, getWorldCloudAction } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStore } from '../../redux/reducer/reducer';
import { useEffect, useState } from "react";
import React from "react";

interface WordCloudItem {
  text: string;
  value: number;
}

const Cloud = () => {
  const [words, setWords] = useState<WordCloudItem[]>([]);
  const [wordCloudData, setWordCloudData] = React.useState([
   
])
  const wordCloudOptions:any = {
    colors: [
        '#1f77b4',
        '#ff7f0e',
        '#2ca02c',
        '#d62728',
        '#9467bd',
        '#8c564b',
    ],
    enableTooltip: false,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [15, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 2,
    rotationAngles: [0, 90],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
}


  const { worldcloud } = useSelector((state: ReduxStore) => state.State);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getWorldCloudAction({
        region_id: null,
        start_date: "1668364200",
        end_date: "1682504392",
      })
    );
  }, [dispatch]);
  

  useEffect(() => {
    if (worldcloud && worldcloud.length > 0) {
      const formattedData = worldcloud.map((word: WordCloudItem) => ({
        text: word.text,
        value: word.value,
      }));
      setWords(formattedData);
    }
  }, [worldcloud]);

  return (
    <div>
      <ReactWordcloud 
       words={words}
       options={wordCloudOptions}
        />
    </div>
  );
};

export default Cloud;