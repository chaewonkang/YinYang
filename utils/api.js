const client = require("contentful").createClient({
  space: "mvbcu8iuz2wk",
  accessToken: "MzPB9943mwqOuE8gqlJu-fkmNhEyltDbsC1dXZwpbjY",
});

export async function getContentfulData() {
  const { items } = await client.getEntries();

  const workList = items
    .sort((a, b) => {
      if (a.fields.date > b.fields.date) return -1;
      if (a.fields.date < b.fields.date) return 1;
      return 0;
    })
    .map((item, i) => {
      const index = i + 1;
      const { title, client, year, category } = item.fields;
      const imgList = item.fields.images.map((image) => ({
        imgUrl: image.fields.file,
      }));
      return {
        index,
        title,
        client,
        year,
        category,
        imgList,
      };
    });

  return {
    workList,
  };
}
