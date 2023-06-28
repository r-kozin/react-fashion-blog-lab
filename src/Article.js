export default function Article({ date, title, img }) {
  return (
    <>
      <article>
        <time datetime={date}>{date}</time>
        <h2 className="aTitle">{title}</h2>
        <img src={img} alt="blog-image" />
        <p className="aBody">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          ducimus impedit perspiciatis optio quia inventore earum doloribus,
          dignissimos eveniet culpa error ipsa quaerat veniam molestiae voluptas
          reprehenderit ipsam officia vitae libero laboriosam aliquid animi.
          Earum odio velit id incidunt repellendus ipsa illo, neque
          necessitatibus quaerat quis ea voluptatem qui cupiditate!
        </p>
        <a href="...">Continues...</a>
      </article>
    </>
  );
}
