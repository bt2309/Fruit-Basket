import FruitCard from "./FruitCard";

export default function FruitsListPage({ fruits }) {
    if (!fruits || fruits.length === 0) {
        return <p>No fruits</p>;
    }

    return (
        <>
            <p>FruitsList</p>
            {fruits.map((fruit) => (
                <FruitCard key={fruit.url} fruit={fruit} />
            ))}
        </>
    );
}