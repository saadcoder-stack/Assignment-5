import "./TechnologyCard.css";

export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  technology: Technology;
  isSelected: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isSelected,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="technology-icon">
          <img src={technology.icon} alt={`${technology.name} icon`} />
        </div>

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-meta">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          <span className="star">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        className={`add-stack-button ${
          isSelected ? "added" : ""
        }`}
        disabled={isSelected}
        onClick={() => onAdd(technology)}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
};

export default TechnologyCard;