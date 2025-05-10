import "./ProductCategories.css";

const placholderImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQye9kPfMG92VKMdNp7Drx_xBGVh6UOeOG6ig&s";

const categories = [
  { title: "Women", imgSrc: placholderImage, emphasize: true },
  { title: "Men", imgSrc: placholderImage },
  { title: "Kids", imgSrc: placholderImage },
  { title: "Curve", imgSrc: placholderImage },
  { title: "Dresses", imgSrc: placholderImage, emphasize: true },
  { title: "Beachwear", imgSrc: placholderImage, emphasize: true },
  { title: "Tops", imgSrc: placholderImage },
  { title: "Jumpsuits & Co-ords", imgSrc: placholderImage },
  { title: "Bottoms", imgSrc: placholderImage },
  { title: "Suits", imgSrc: placholderImage },
  { title: "Lingerie & Loungewear", imgSrc: placholderImage },
  { title: "Jeans", imgSrc: placholderImage },
  { title: "Shoes", imgSrc: placholderImage },
  { title: "Beauty & Health", imgSrc: placholderImage, emphasize: true },
  { title: "Home & Living", imgSrc: placholderImage },
];

export default function ProductCategories() {
  return (
    <div className="product-categories">
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </div>
  );
}

function CategoryItem({ title, imgSrc, imgAlt, emphasize = false }) {
  return (
    <div className="category-item">
      <div className="category-image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="category-title">{title}</div>
      {emphasize && <div className="category-emphasize">Hot</div>}
    </div>
  );
}