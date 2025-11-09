import { reviews } from "../../data/reviews";
import "./Reviews.css";

export default function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <h2 className="reviews__title">Відгуки про нас</h2>

      {reviews.map((item) => (
        <article key={item.id} className="review">
          <h3 className="review__title">{item.author}</h3>
          <p className="review__desc">{item.text}</p>
        </article>
      ))}
    </section>
  );
}
