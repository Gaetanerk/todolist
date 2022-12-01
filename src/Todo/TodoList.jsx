import {useEffect, useRef, useState} from 'react';

export const TodoList = () => {

    const [userInput, setUserInput] = useState("");
    const [items, setItems] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, )

    function handleChange(e) {
        setUserInput(e.target.value)
    }

    function addTodo(e) {
        e.preventDefault();
        setItems(items => [...items, userInput]);
        setUserInput("");
    }

    function deleteTodo(item) {
        const index = item.target.value;
        items.splice(index, 1);
        const newStateItems = [...items];
        setItems(newStateItems);
    }


    return (
        <div>
            <h1>Ma TodoList</h1>
            <form>
                <input
                    value={userInput}
                    ref={inputRef}
                    type="text"
                    placeholder="Renseigner un item"
                    onChange={handleChange}></input>
                <button onClick={addTodo}>Ajouter</button>
            </form>
            {items.map((item, index) => {

                return (
                    <div key={item}>
                        {item} | <button onClick={deleteTodo} value={index}>Supprimer</button>
                    </div>
                )
            })}
        </div>
    )
}