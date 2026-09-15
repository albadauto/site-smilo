import Link from "next/link";
import Icon from "./Icon";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ink-900 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.4)] sm:p-7"
    >
      <span className="inline-flex w-fit items-center rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-600">
        {post.category}
      </span>
      <h2 className="text-lg font-semibold leading-snug text-ink-950">{post.title}</h2>
      <p className="flex-1 text-sm leading-relaxed text-ink-600">{post.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-ink-500">
        <span>{post.readingTime}</span>
        <span className="inline-flex items-center gap-1.5 font-medium text-ink-900">
          Ler artigo
          <Icon
            name="ArrowRight"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
