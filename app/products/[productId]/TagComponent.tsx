export default function TagsComponent({ tags }: { tags: Array<string> }) {
  if (tags.length === 0) return null;
  return (
    <>
      {
        <p className="max-w-[40%] text-thirdClr dark:text-thirdClrDark">
          {tags?.map((tag: string, index: number) => {
            return <small key={index}>#{`${tag} `}</small>;
          })}
        </p>
      }
    </>
  );
}
