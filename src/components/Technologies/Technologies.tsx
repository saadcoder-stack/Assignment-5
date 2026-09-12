import { useState } from "react";
import technologiesData from "../../data/technologies.json";

import TechnologyCard, {
  type Technology,
} from "./TechnologyCard";

import YourStack from "./YourStack";

import "./Technologies.css";

const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const handleAddToStack = (technology: Technology) => {
    const alreadyExists = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      alert(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);
  };

  const handleRemove = (id: string) => {
    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section
      className="technologies-section"
      id="technologies"
    >
      <div className="technologies-container">

        {/* Section Heading */}

        <div className="technologies-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>


        {/* Content */}

        <div className="technologies-content">

          {/* Technology Grid */}

          <div className="technology-grid">
            {technologiesData.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isSelected={selectedTechnologies.some(
                  (item) => item.id === technology.id
                )}
                onAdd={handleAddToStack}
              />
            ))}
          </div>


          {/* Your Stack */}

          <YourStack
            selectedTechnologies={selectedTechnologies}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>

      </div>
    </section>
  );
};

export default Technologies;