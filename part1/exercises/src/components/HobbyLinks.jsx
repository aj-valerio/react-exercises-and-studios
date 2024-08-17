export default function HobbyLinks (){
    const hobbyLinks = ["https://www.slam.org/", "https://www.missouribotanicalgarden.org/"];
    return (
        <div>
            <h3>Hobbies</h3>
            <a href = {hobbyLinks[0]}>Visiting Art Museums</a>
            <a href = {hobbyLinks[1]}>Walks in Beautiful Places</a>
        </div>
    );
}