import { useUser } from "../../contexts/userContext";

export default function ChildComponent2() {
   const { userDetail, setUserDetail } = useUser();//gets the data associated with userContext
    return (
    <div>
        <h1>2nd ChildComponent</h1>
        <p>Welcome Mr. {userDetail} for joining us!!!</p>
        <p>
            <button onClick={(e) => setUserDetail("Ramesh")}>Change User</button>
        </p>
    </div>
  )
}