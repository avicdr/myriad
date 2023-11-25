import { DefaultRootState } from 'react-redux';

export interface RootState extends DefaultRootState {
  State: any;
  Static: {
    wordcloud: any[];
  };
}





