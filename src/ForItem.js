export default function ForItem({ book }) {
  return (
    <>
      <dt>
        <a href={'https://wings.msn.to/books/${book.sdbn}/${book.sdbn.jpg}'}>
          {book.title} ({book.price}円)
        </a>
      </dt>
      <dd>{book.summary}</dd>
    </>
  );
}