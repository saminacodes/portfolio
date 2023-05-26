export default {
  footer: <p> </p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.data && <meta name="date" content={meta.date} />}
    </>
  ),
  readMore: "Read Post →",
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: "https://hashnode.com/@saminacodes",
      name: "Read on Hashnode",
    },
  ],
};
