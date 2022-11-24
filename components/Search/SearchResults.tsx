import Divider from "../Divider";
import Result from "./Result";

type Props = {
  results: Array<Object>;
};

const SearchResults: React.FC<Props> = ({ results }) => {
  return (
    <section className="flex-1 h-full overflow-y-scroll">
      <h1 className="text-3xl font-semibold text-zinc-800">Results</h1>
      <Divider customClass="my-4" />
      <div className="w-full my-4 flex flex-col gap-5">
        {results
          ? results.map((result: any) => {
              return (
                <Result
                  key={result._id}
                  id={result._id}
                  name={result.name}
                  followers={result.followers.length}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export default SearchResults;
