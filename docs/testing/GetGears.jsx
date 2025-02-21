import Gears from './gears.json'

const heliGear = Gears.heliGears

function GetGears() {
    return (
<>
    <table>
        <tr>
            <th>Name</th>
            <th>z1</th>
            <th>z2</th>
            <th>z3</th>
            <th>z4</th>
            <th>z5</th>
            <th>z6</th>
        </tr>
        <tbody className="helpMe">
            {heliGear.map((g)=>(
            <tr>
                <td>{g.name}</td>
                <td>{g.z1}</td>
                <td>{g.z2}</td>
                <td>{g.z3}</td>
                <td>{g.z4}</td>
                <td>{g.z5}</td>
                <td>{g.z6}</td>
            </tr>
        ))}

        </tbody>
    </table>
</>
    )
}

export default GetGears