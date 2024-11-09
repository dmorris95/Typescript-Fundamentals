const ColorList: React.FC = () => {
    const colors: string[] = ["Red", "Blue", "Green", "Yellow"];
    const numArray: number[] = [2, 4, 5, 7, 11, 15, 17, 22];

    function filterNumbers(numbers: number[]) {
        return numbers.filter((number) => number%2 === 0)
    }

    return (
        <>
            <ul>
                {colors.map((color) => (
                    <li>{color}</li>
                ))}
            </ul>
            <h2>Only Evens Array:</h2>
            <ul>
                {filterNumbers(numArray).map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
        </>
    )
};

export default ColorList;