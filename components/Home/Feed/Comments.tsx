import Comment from "./Comment";

const Comments: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <Comment
        name="Mskhan"
        content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Comment
        name="dale Lion"
        content="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
      <p className="text-xl mb-4 font-semibold cursor-pointer text-slate-700 hover:underline">
        View more comments
      </p>
    </div>
  );
};

export default Comments;
