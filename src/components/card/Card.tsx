import { CardProps } from '../../type';

export default function Card({ id, content, status }: CardProps) {
  return (
    <>
      <h1>{id}</h1>
      <div>{content}</div>
      <p>{status}</p>
    </>
  );
}
