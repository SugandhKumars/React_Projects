import { useState } from "react";
import "./App.css";
const data = [
  {
    name: "Raju",
    balance: 500,
    id: 1,
    img: "https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg",
  },
  {
    name: "Satpal",
    balance: -500,
    id: 2,
    img: "https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg",
  },
  {
    name: "Sachin",
    balance: 500,
    id: 3,
    img: "https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg",
  },
];
function App() {
  const [friendlist, setFriendList] = useState(data);

  const handleAddFriend = (friend) => {
    setFriendList([...friendlist, friend]);
  };
  return (
    <>
      <div className="Main-Container">
        <div>
          <FriendList list={friendlist} />
          <AddFriendForm onAddFriend={handleAddFriend} />
        </div>

        <BillSplit />
      </div>
    </>
  );
}
function FriendList({ list }) {
  console.log(list);
  return (
    <>
      <div>
        {list.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    </>
  );
}
function Friend({ friend }) {
  return (
    <>
      <div className="friend">
        <img src={friend.img} alt="" />
        <div className="forButton">
          <div>
            <p>{friend.name}</p>
            {friend.balance > 0 && (
              <p className="balance" style={{ color: "green" }}>
                {friend.name} owe you {Math.abs(friend.balance)} Rupees.
              </p>
            )}
            {friend.balance < 0 && (
              <p className="balance" style={{ color: "red" }}>
                You owe {friend.name} {Math.abs(friend.balance)} Rupees.
              </p>
            )}
            {friend.balance == 0 && (
              <p className="balance">You and {friend.name} are Even.</p>
            )}
          </div>
          <button>Select</button>
        </div>
      </div>
    </>
  );
}

function AddFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImg] = useState(
    "https://img.freepik.com/free-photo/young-crazy-man-happy-expression_1194-5236.jpg"
  );
  const [showForm, setShowForm] = useState(false);
  const HandleSubmitAddFriend = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    let newFriend = { name, img: image, id: Math.random(), balance: 0 };
    onAddFriend(newFriend);
    setName("");
    setShowForm(false);
  };
  return (
    <>
      {showForm && (
        <form className="addFriendForm" onSubmit={HandleSubmitAddFriend}>
          <div>
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Image Url</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="buttn-div">
            <button className="button">Submit</button>
          </div>
        </form>
      )}
      <button className="toLeft" onClick={(e) => setShowForm(!showForm)}>
        {showForm ? "Close" : "Add a Friend"}
      </button>
    </>
  );
}

function BillSplit() {
  return (
    <>
      <div className="SpliBIll">
        <p>Split Bill With X</p>
        <form>
          <div>
            <label>Bill Value</label>
            <input type="text" />
          </div>
          <div>
            <label>Your Expanse</label>
            <input type="text" />
          </div>
          <div>
            <label>X Expanse</label>
            <input type="text" disabled />
          </div>
          <div>
            <label>Who is paying the Bill</label>
            <select>
              <option value="user">You</option>
              <option value="friend">Friend</option>
            </select>
          </div>
          <div className="buttn-div">
            <button className="toLeft">Split Bill</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
