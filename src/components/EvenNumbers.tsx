const EvenNumbers: React.FC = () => {
    const numArray: number[] = [2, 3, 5, 8, 121, 150, 17, 22];

    function filterNumbers(numbers: number[]) {
        return numbers.filter((number) => number%2 === 0)
    }

    return (
        <div>
            <h3>A Second Only Evens Array:</h3>
            <ul>
                {filterNumbers(numArray).map((num) => (
                    <li>{num}</li>
                ))}
            </ul>
        </div>
    )
};

export default EvenNumbers;