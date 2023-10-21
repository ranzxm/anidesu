export const TitleHeader = ({ judul }) => {
  return (
    <div className="title relative my-3 select-none">
      <h2 className="ml-4 font-bold uppercase">{judul}</h2>
      <span className=" absolute w-2 h-full top-0 bg-blue-400" />
    </div>
  );
};
