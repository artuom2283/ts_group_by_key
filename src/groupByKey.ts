type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: typeof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach(item => {
    const grKey = String(item[key]);

    result[grKey] = [...(result[grKey] || []), item];
  });

  return result;
}
