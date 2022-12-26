import { ReactElement } from 'react';
import { CardContainerProps, CardProps, Todo } from '../../type';
import Card from '../card/Card';

const CardContainer: React.FC<CardContainerProps> = ({ data }) => {
  return (
    <>
      {data?.map((todo: Todo): ReactElement => {
        const CardProps: CardProps = {
          id: todo.id,
          content: todo.content,
          status: todo.isCompleted ? 'Complete' : 'Not Yet',
        };

        return <Card {...CardProps} />;
      })}
    </>
  );
};

export default CardContainer;
