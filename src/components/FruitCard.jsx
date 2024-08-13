export default function FruitCard({ fruit }) {
    return (
      <>
        <dl>
          <dt>Name</dt>
          <dd>{fruit.name}</dd>

          <dt>Family</dt>
          <dd>{fruit.family}</dd>

          <dt>Protein</dt>
          <dd>{fruit.protein}</dd>
  
          <dt>Fat</dt>
          <dd>{fruit.fat}</dd>
  
          <dt>Calories</dt>
          <dd>{fruit.calories}</dd>

          <dt>Sugar</dt>
          <dd>{fruit.sugar}</dd>
        </dl>
      </>
    );
  }
  