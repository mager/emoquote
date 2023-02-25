import { QuoteT } from "../../types/quote";
type Props = {
  text: string;
  attr: string;
};

const Quote = ({ text, attr }: Props) => {
  return (
    <div className="mx-6 my-8">
      <div className="font-serif text-4xl leading-10">{text}</div>
      <div className="text-lg text-right mr-6">-{attr}</div>
    </div>
  );
};

export default Quote;
