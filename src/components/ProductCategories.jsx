import "./ProductCategories.css";
import jumpsuit from "../assets/product/jumpsuit.png";
import hot1 from "../assets/product/hot1.png";
import men from "../assets/product/men.png";
import kids from "../assets/product/kids.png";
import curve from "../assets/product/curve.png";
import hot2 from "../assets/product/hot2.png";
import hot3 from "../assets/product/hot3.png";
import tops from "../assets/product/tops.png";
import bottoms from "../assets/product/bottoms.png";
import suits from "../assets/product/suits.png";
import lingerie from "../assets/product/lingerie.png";
import jeans from "../assets/product/jeans.png";
import shoes from "../assets/product/shoes.png";
import hot4 from "../assets/product/hot4.png";
import home from "../assets/product/home.png";

const categories = [
  { title: "Women", imgSrc: hot1, emphasize: true },
  { title: "Men", imgSrc: men },
  { title: "Kids", imgSrc: kids },
  { title: "Curve", imgSrc: curve },
  { title: "Dresses", imgSrc: hot2, emphasize: true },
  { title: "Beachwear", imgSrc: hot3, emphasize: true },
  { title: "Tops", imgSrc: tops },
  { title: "Jumpsuits & Co-ords", imgSrc: jumpsuit },
  { title: "Bottoms", imgSrc: bottoms },
  { title: "Suits", imgSrc: suits },
  { title: "Lingerie & Loungewear", imgSrc: lingerie },
  { title: "Jeans", imgSrc: jeans },
  { title: "Shoes", imgSrc: shoes },
  { title: "Beauty & Health", imgSrc: hot4, emphasize: true },
  { title: "Home & Living", imgSrc: home },
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