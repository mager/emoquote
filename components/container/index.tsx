type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="w-full px-4">
      <div className="w-full flex items-center justify-center">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Container;
