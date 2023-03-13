export default function TagsComponent({ tags }: any) {
  if (tags.length === 0) return null;
  return (
    <div>
      {
        <p className="text-thirdClr dark:text-thirdClrDark">
          {tags?.map((tag: string, index: number) => {
            return <small key={index}>#{`${tag} `}</small>;
          })}
        </p>
      }
    </div>
  );
}
