type Props = {
  children: React.ReactNode;
};

const Quote = ({ children }: Props) => {
  return <div className="font-serif text-5xl m-4 leading-10">{children}</div>;
};

export default Quote;
