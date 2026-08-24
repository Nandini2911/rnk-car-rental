export function parseBlogDate(value?: string) {
  if (!value) return null;

  // Recommended format: YYYY-MM-DD
  const date = /^\d{4}-\d{2}-\d{2}$/.test(value)
    ? new Date(`${value}T00:00:00`)
    : new Date(value);

  return Number.isNaN(date.getTime()) ? null : date;
}

export function formatBlogDate(value?: string) {
  const date = parseBlogDate(value);

  if (!date) return value || "";

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function sortBlogsNewestFirst<T extends { date?: string }>(blogs: T[]) {
  return [...blogs].sort((a, b) => {
    const aDate = parseBlogDate(a.date)?.getTime() ?? 0;
    const bDate = parseBlogDate(b.date)?.getTime() ?? 0;
    return bDate - aDate;
  });
}

export function getBlogsFromLastDays<T extends { date?: string }>(
  blogs: T[],
  days = 7
) {
  const now = new Date();

  const end = new Date(now);
  end.setHours(23, 59, 59, 999);

  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));

  return sortBlogsNewestFirst(
    blogs.filter((blog) => {
      const date = parseBlogDate(blog.date);
      return !!date && date >= start && date <= end;
    })
  );
}