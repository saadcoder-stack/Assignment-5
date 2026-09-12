import type { Technology } from "./TechnologyCard";
import "./YourStack.css";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  const count = selectedTechnologies.length;

  return (
    <aside className="your-stack">
      <div className="stack-header">
        <h2>Your Stack</h2>

        <p>
          {count} Technology{count !== 1 ? "s" : ""} Selected
        </p>
      </div>

      {count === 0 ? (
        <div className="empty-stack">
          <p>Your stack is empty.</p>

          <span>
            Add technologies to build your ideal stack.
          </span>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {selectedTechnologies.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <img
                  src={technology.icon}
                  alt={`${technology.name} icon`}
                />

                <div className="stack-item-info">
                  <strong>{technology.name}</strong>
                  <span>{technology.category}</span>
                </div>

                <button
                  className="remove-item"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;