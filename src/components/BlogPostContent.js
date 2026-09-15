export default function BlogPostContent({ blocks }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2
              key={index}
              className="mt-6 text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "h3") {
          return (
            <h3 key={index} className="mt-4 text-xl font-semibold text-ink-950">
              {block.text}
            </h3>
          );
        }

        if (block.type === "ul") {
          return (
            <ul
              key={index}
              className="ml-5 list-disc space-y-2 text-base leading-relaxed text-ink-600 sm:text-lg"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "callout") {
          return (
            <div
              key={index}
              className="rounded-2xl border border-ink-100 bg-ink-50/60 p-5 text-sm leading-relaxed text-ink-700 sm:text-base"
            >
              {block.text}
            </div>
          );
        }

        return (
          <p key={index} className="text-base leading-relaxed text-ink-600 sm:text-lg">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
