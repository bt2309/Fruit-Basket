import { Link } from "react-router-dom";

export default function NewCharacterPage() {
    return (
        <>
            <form>
                <h3>New Character</h3>
                <body className="new-form">
                <label>
                    Name:
                    <input/>
                </label>
                <label>
                    Height:
                    <input/>
                </label>
                <label>
                    Hair Colour:
                    <input/>
                </label>
                <label>
                    Eye Colour:
                    <input/>
                </label>
                <label>
                    Birth Year:
                    <input/>
                </label>
                <Link to="/characters">
                <button>Add</button>
                </Link>
                </body>
            </form>
        </>
    )
}

